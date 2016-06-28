
  var myApp = angular.module('myApp', ['ui.router', 'angularCSS']);
  myApp.config(function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
  {

    myApp.controllerProvider = $controllerProvider;
    myApp.compileProvider    = $compileProvider;
    myApp.stateProvider      = $stateProvider;
    myApp.filterProvider     = $filterProvider;
    myApp.provide            = $provide;


    $urlRouterProvider.otherwise("/404");
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/pages/home/home.html",
            controller: "HomeCtrl",
            css: appIncludeFilesJson[appEnvironment].pages.home.css,
            resolve:
            {
                deps:function($q, $rootScope){
                    var deferred = $q.defer();
                    var dependencies = appIncludeFilesJson[appEnvironment].pages.home.js;

                    $script(dependencies, function()
                    {
                        $rootScope.$apply(function()
                        {
                            deferred.resolve();
                        });
                    });
                    return deferred.promise;
                }
            }
        })
        .state('notFound', {
            url: "/404",
            templateUrl: "views/pages/404/404.html",
            controller: "NotFoundCtrl",
            css: appIncludeFilesJson[appEnvironment].pages.notFound.css,
            resolve:
            {
                deps:function($q, $rootScope){
                    var deferred = $q.defer();
                    var dependencies = appIncludeFilesJson[appEnvironment].pages.notFound.js;

                    $script(dependencies, function()
                    {
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

