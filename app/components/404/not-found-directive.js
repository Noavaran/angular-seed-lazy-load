myApp.compileProvider.directive('notFoundPage', function(  ) {
        return {
            restrict: 'E',
            scope: {
                text : "@"
            },
            templateUrl: '/app/components/404/not-found-directive.html',
            controller: function( $rootScope, $scope) {

                console.log("in directive 404");

            }
        };
    });
