(function () {
    angular.module('app').directive('fball', fball);
    fball.$inject = [];

    function fball() {
        var directive = {
            link: link,
            scope: {
                on: '='
            },
            templateUrl: 'app/js/templates/fball.html',
            restrict: 'E'
        };

        return directive;

        function link(scope, element, attr) {


        }
    }
})();
