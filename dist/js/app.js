angular.module('app', [])

(function() {
    angular.module('app').controller('indexController',
        indexController);
    indexController.$inject = ['$scope'];
    function indexController($scope) {
        $scope.title = 'IT WOnRKS!!';
    }
})();