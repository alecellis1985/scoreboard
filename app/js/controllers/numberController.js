
(function() {
    angular.module('app').controller('numberController',
        numberController);
    numberController.$inject = ['$scope'];
    function numberController($scope) {
        //$scope.clear = function () {
        //    $("div[id ^= 'dot_']").removeClass("active");
        //}
        //$scope.number8 = function () {
        //    $scope.clear();
        //    $("div[id ^= 'dot_']").addClass("active");
        //}
    }

})();