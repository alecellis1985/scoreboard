
(function () {
    angular.module('app').controller('numberController',
        numberController);
    numberController.$inject = ['$scope'];
    function numberController($scope) {
        var vm = this;
        //Coach Sales: 2500000
        //B2B Sales: 2510030
        //Total Sales:5010030

        vm.coachSales = 2500000;
        vm.partnerSales = 2510030;
        vm.total = vm.coachSales + vm.partnerSales;

        //GET Vals
        vm.currentCoachSale = 530300;
        vm.currentpartnerSales = 360300;

        vm.outputCurrentCoachSale = [0, 0, 0, 0, 0, 0, 0];
        vm.outputCurrentpartnerSalese = [0, 0, 0, 0, 0, 0, 0];

        //init
        init();

        function init() {
            updateValues();
            vm.qtr = qtr();
        }

        function updateValues() {
            updateOutputArr(vm.outputCurrentCoachSale, vm.currentCoachSale);
            updateOutputArr(vm.outputCurrentpartnerSalese, vm.currentpartnerSales);
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

        function splitNr(nr) {
            var nbr = nr;
            return nbr.toString().split('');
        }
    }

})();