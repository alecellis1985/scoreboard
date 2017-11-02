(function () {
    angular.module('app').directive('number', number);

    number.$inject = [];
    function number() {
        var directive = {
            link: link,
            templateUrl: 'dev/app/templates/numberTemplate.html',
            restrict: 'E',
            scope: {
                "time": "="
            }
        };
        return directive;

        function link(scope, element, attrs) {
            scope.dot1 = [2, 3, 4, 5, 6, 7, 8, 9, 0];
            scope.dot2 = [2, 3, 5, 7, 8, 9, 0];
            scope.dot3 = [2, 3, 5, 7, 8, 9, 0];
            scope.dot4 = [1, 2, 3, 4, 5, 7, 8, 9, 0];
            scope.dot5 = [4, 5, 6, 8, 9, 0];
            scope.dot6 = [1, 2, 3, 4, 7, 8, 9, 0];
            scope.dot7 = [4, 5, 6, 8, 9, 0];
            scope.dot8 = [1, 2, 3, 4, 7, 8, 9, 0];
            scope.dot9 = [2, 3, 4, 5, 6, 8, 9, 0];
            scope.dot10 = [2, 3, 4, 5, 6, 8, 9];
            scope.dot11 = [2, 3, 4, 5, 6, 8, 9];
            scope.dot12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
            scope.dot13 = [2, 6, 8, 0];
            scope.dot14 = [1, 3, 4, 5, 6, 7, 8, 9, 0];
            scope.dot15 = [2, 6, 8, 0];
            scope.dot16 = [1, 3, 4, 5, 6, 7, 8, 9, 0];
            scope.dot17 = [2, 3, 5, 6, 8, 0];
            scope.dot18 = [2, 3, 5, 6, 8, 0];
            scope.dot19 = [2, 3, 5, 6, 8, 0];
            scope.dot20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
            scope.indexOfTime = indexOfTime;

            function indexOfTime(arrname) {
                return arrname.indexOf(parseInt(scope.time)) !== -1;
            }
        }
    }
    
})();