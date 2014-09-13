angular.module('thirtySixFacts', ['thirtySixFacts.controllers', 'LocalStorageModule', 'ngRoute', 'ngResource'])
    .constant('MathFacts', mathFacts)
    .config(function($routeProvider) {
        $routeProvider
            .when('/first', {
                controller: 'FactsCntl',
                templateUrl: 'views/facts.html'
            })
            .when('/second', {
                controller: 'FactsCntl',
                templateUrl: 'views/facts.html'
            })
            .when('/third', {
                controller: 'FactsCntl',
                templateUrl: 'views/facts.html'
            })
            .when('/fourth', {
                controller: 'FactsCntl',
                templateUrl: 'views/facts.html'
            })
            .when('/fifth', {
                controller: 'FactsCntl',
                templateUrl: 'views/facts.html'
            })
            .when('/sixth', {
                controller: 'FactsCntl',
                templateUrl: 'views/facts.html'
            })
            .when('/kindergarten', {
                controller: 'FactsCntl',
                templateUrl: 'views/facts.html'
            })
            .otherwise({
                redirectTo:'/kindergarten'
            });
    });

angular.module('thirtySixFacts.controllers', []);