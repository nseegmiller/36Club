angular.module('thirtySixFacts.controllers').controller('MainCntl', ['$scope', '$location', 'localStorageService',
    function($scope, $location, localStorageService) {
        $scope.$location = $location;

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
            return Object.keys(mathFacts[grade.path.substring(1)]);
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