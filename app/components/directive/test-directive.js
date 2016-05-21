myApp.compileProvider.directive('testDirective', function(  ) {
        return {
            restrict: 'E',
            scope: {
                text : "@"
            },
            templateUrl: '/app/components/directive/test-directive.html',
            controller: function( $rootScope, $scope) {

                console.log("in directive" , $scope.text);

            }
        };
    });
