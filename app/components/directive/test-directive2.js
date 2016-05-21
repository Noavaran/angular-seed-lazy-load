myApp.compileProvider.directive('testDirective2', function(  ) {
        return {
            restrict: 'E',
            scope: {
                text : "@"
            },
            templateUrl: '/app/components/directive/test-directive.html',
            controller: function( $rootScope, $scope) {

                console.log("in directive 2" , $scope.text);

            }
        };
    });
