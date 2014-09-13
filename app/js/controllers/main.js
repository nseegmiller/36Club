angular.module('thirtySixFacts.controllers').controller('MainCntl', ['$scope', '$location', 'localStorageService', 'MathFacts',
    function($scope, $location, localStorageService, MathFacts) {
        $scope.$location = $location;
        $scope.MathFacts = MathFacts;

        $scope.grades = [
            {
                name: "Kindergarten",
                path: "/kindergarten"
            },
            {
                name: "First Grade",
                path: "/first"
            },
            {
                name: "Second Grade",
                path: "/second"
            },
            {
                name: "Third Grade",
                path: "/third"
            },
            {
                name: "Fourth Grade",
                path: "/fourth"
            },
            {
                name: "Fifth Grade",
                path: "/fifth"
            },
            {
                name: "Sixth Grade",
                path: "/sixth"
            }
        ];

        $scope.getOptions = function(grade) {
            return Object.keys(MathFacts[grade.path.substring(1)]);
        };

        localStorageService.add('lastMode', $scope.mode);

        var mode = localStorageService.get('lastOptionMode') || 'addition';

        $scope.option = {
            mode: mode
        };

        $scope.setOption = function(option) {
            localStorageService.add('lastOptionMode', option);
            $scope.option.mode = option;
        };
    }
]);