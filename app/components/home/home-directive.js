myApp.compileProvider.directive('testDirective', function(  ) {
        return {
            restrict: 'E',
            scope: {
                text : "@"
            },
            templateUrl: '/app/components/home/home-directive.html',
            controller: function( $rootScope, $scope) {

                console.log("in " , $scope.text);

            }
        };
    });
