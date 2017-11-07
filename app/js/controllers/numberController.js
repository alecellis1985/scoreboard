
(function () {
    angular.module('app').controller('numberController',
        numberController);
    numberController.$inject = ['$scope', '$interval'];
    function numberController($scope, $interval) {
        var vm = this;
        //DEFAULT GOALS
        vm.coachSalesGoal = 2500000;
        vm.partnerSalesGoal = 2510030;
        vm.totalGoal = vm.coachSalesGoal + vm.partnerSalesGoal;

        //TODO: TIM put this numbers in 0
        //GET Vals FROM API MOKUP
        vm.currentCoachSale = 530300;
        vm.currentpartnerSales = 360300;
        vm.todayCoachSale = 10010;
        vm.todayPartnerSale = 36030;

        vm.outputCurrentCoachSale = [0, 0, 0, 0, 0, 0, 0];
        vm.outputCurrentpartnerSalese = [0, 0, 0, 0, 0, 0, 0];
        vm.outputHrRemaining = [0, 0];
        vm.outputDaysRemaining = [0, 0, 0];

        vm.outputCoachSalePerc = [0, 0, 0];
        vm.outputPartnerSalePerc = [0, 0, 0];
        vm.outputTotalSalePerc = [0, 0, 0];

        vm.outputTotalSales = [0, 0, 0, 0, 0, 0, 0];

        vm.outputTodayPartnerSale = [0, 0, 0, 0, 0];
        vm.outputTodayCoachSale = [0, 0, 0, 0, 0];

        vm.endDate = new Date(2018, 5, 30, 23, 59, 59, 0);
        vm.coachSalesGoalPerc = 0;
        vm.partnerSalesGoalPerc = 0;
        vm.totalGoalPerc = 0;

        vm.coachwinning = false;

        vm.timerActive = false;

        //init
        init();

        function init() {
            updateScoreBoard();
            updateTimeSection();

            //Update values every 5minutes
            $interval(function () {
                updateScoreBoard();
            }, 5 * 60 * 1000);
            //Update every 1 minute
            $interval(function () {
                updateTimeSection();
            }, 60 * 1000);


            $interval(function () {
                vm.timerActive = !vm.timerActive;
            }, 1000);
        }

        function updateScoreBoard() {
            updateValues();
        }

        function updateTimeSection() {
            vm.qtr = qtr();
            updateOutputArr(vm.outputHrRemaining, remainingHours(new Date(), vm.endDate));
            updateOutputArr(vm.outputDaysRemaining, remainingDays(new Date(), vm.endDate));
        }

        function updateValues() {
            //TODO: TIM UNCOMMENT NEXT LINES
            //$http.get('URLTOGETVALUES').then(function (response) {
            //    var data = response.data;
            //    vm.currentCoachSale = data.currentCoachSale;
            //    vm.currentpartnerSales = data.currentpartnerSales;
            //    vm.todayCoachSale = data.todayCoachSale;
            //    vm.todayPartnerSale = data.todayPartnerSale;

            updateOutputArr(vm.outputCurrentCoachSale, vm.currentCoachSale);
            updateOutputArr(vm.outputCurrentpartnerSalese, vm.currentpartnerSales);
            updateOutputArr(vm.outputTotalSales, vm.currentpartnerSales + vm.currentCoachSale);

            vm.coachSalesGoalPerc = setGoalPercentage(vm.currentCoachSale, vm.coachSalesGoal);
            vm.partnerSalesGoalPerc = setGoalPercentage(vm.currentpartnerSales, vm.partnerSalesGoal);
            vm.totalGoalPerc = setGoalPercentage(vm.currentpartnerSales + vm.currentCoachSale, vm.totalGoal);

            updateOutputArr(vm.outputCoachSalePerc, vm.coachSalesGoalPerc);
            updateOutputArr(vm.outputPartnerSalePerc, vm.partnerSalesGoalPerc);
            updateOutputArr(vm.outputTotalSalePerc, vm.totalGoalPerc);

            updateOutputArr(vm.outputTodayPartnerSale, vm.todayPartnerSale);
            updateOutputArr(vm.outputTodayCoachSale, vm.todayCoachSale);

            vm.coachwinning = setFball(vm.currentCoachSale, vm.currentpartnerSales);
            //TODO: TIM UNCOMMENT NEXT LINE
            //});
        }

        function setFball(a, b) {
            if (a === b)
                return -1;
            if (a > b)
                return 1;
            if (a < b)
                return 0;
            return -1;
        }

        function setGoalPercentage(currentVal, goal) {
            return Math.round(currentVal / goal * 100);
        }

        function updateOutputArr(outputArr, nr) {
            var nbr = splitNr(nr);

            var nrLength = nbr.length;
            var outputArrLength = outputArr.length;
            while (nrLength--) {
                outputArr[--outputArrLength] = nbr[nrLength];
            }
            while (outputArrLength--) {
                outputArr[outputArrLength] = -1;
            }
        }

        function qtr() {
            var a = new Date();
            var currentM = a.getMonth() + 1;
            if (currentM > 6 && currentM <= 9)
                return 1;
            if (currentM > 9 && currentM <= 12)
                return 2;
            if (currentM > 0 && currentM <= 3)
                return 3;
            if (currentM > 3 && currentM <= 6)
                return 4;
        }

        function remainingDays(startD, endD) {
            var result = parseInt(Math.floor(Math.abs(endD - startD) / 36e5) / 24);
            return result;
        }

        function remainingHours(startD, endD) {
            var hours = Math.floor(Math.abs(endD - startD) / 36e5) / 24 % 1 * 24;
            return parseInt(hours);
        }

        function splitNr(nr) {
            var nbr = nr;
            return nbr.toString().split('');
        }
    }

})();