// 'use strict';
//
// // Declare app level module which depends on views, and components
// var myApp = angular.module('myApp', ['ngRoute']);
//
// myApp.config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl'
//   });
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
//


// (function()
// {
  var myApp = angular.module('myApp', ['ui.router', 'angularCSS', 'ngStorage']);
  myApp.config(function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
  {

    myApp.controllerProvider = $controllerProvider;
    myApp.compileProvider    = $compileProvider;
    myApp.stateProvider      = $stateProvider;
    myApp.filterProvider     = $filterProvider;
    myApp.provide            = $provide;


    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('test', {
          url: "/view1",
          templateUrl: "view1/view1.html",
          css: appIncludeFilesJson[appEnvironment].pages.test.css,
          controller: 'View1Ctrl',
          resolve:
            {
              deps:function($q, $rootScope){
                var deferred = $q.defer();
                var dependencies = appIncludeFilesJson[appEnvironment].pages.test.js;

                $script(dependencies, function()
                {
                  // all dependencies have now been loaded by $script.js so resolve the promise
                  $rootScope.$apply(function()
                  {
                    deferred.resolve();
                  });
                });

                return deferred.promise;
              }
            }
         })

        .state('test2', {
          url: "/view2",
          templateUrl: "view2/view2.html",
          controller: 'View2Ctrl',
          resolve:
          {
            deps:function($q, $rootScope){
              var deferred = $q.defer();
              var dependencies =
                  [
                      'view2/view2.js',
                      '/app/components/directive/test-directive.js'
                  ];

              $script(dependencies, function()
              {
                // all dependencies have now been loaded by $script.js so resolve the promise
                $rootScope.$apply(function()
                {
                  deferred.resolve();
                });
              });

              return deferred.promise;
            }
          }
        })

        .state('test3', {
          url: "/view3",
          templateUrl: "view3/view3.html",
          controller: 'View3Ctrl',
          resolve:
          {
            deps:function($q, $rootScope){
              var deferred = $q.defer();
              var dependencies =
                  [
                    'view3/view3.js',
                    '/app/components/directive/test-directive.js',
                    '/app/components/directive/test-directive2.js'
                  ];

              $script(dependencies, function()
              {
                // all dependencies have now been loaded by $script.js so resolve the promise
                $rootScope.$apply(function()
                {
                  deferred.resolve();
                });
              });

              return deferred.promise;
            }
          }
        })
  });
// })();
