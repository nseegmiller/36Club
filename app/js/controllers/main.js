angular.module('thirtySixClub.controllers').controller('MainCntl', ['$scope',
    function($scope) {
        var states = {
            WAITING: 0,
            RUNNING: 1,
            DONE: 2
        };
        $scope.addQuestions = [
            {a: 4, b: 6},
            {a: 7, b: 8},
            {a: 9, b: 9},
            {a: 4, b: 2},
            {a: 5, b: 4},
            {a: 4, b: 4},
            {a: 3, b: 9},
            {a: 7, b: 5},
            {a: 8, b: 8},
            {a: 3, b: 6},
            {a: 7, b: 3},
            {a: 3, b: 3},
            {a: 7, b: 9},
            {a: 2, b: 8},
            {a: 9, b: 6},
            {a: 4, b: 9},
            {a: 9, b: 5},
            {a: 5, b: 5},
            {a: 8, b: 9},
            {a: 6, b: 7},
            {a: 6, b: 8},
            {a: 2, b: 7},
            {a: 5, b: 8},
            {a: 4, b: 7},
            {a: 2, b: 6},
            {a: 6, b: 6},
            {a: 3, b: 8},
            {a: 3, b: 4},
            {a: 3, b: 5},
            {a: 4, b: 8},
            {a: 5, b: 6},
            {a: 2, b: 3},
            {a: 2, b: 9},
            {a: 2, b: 5},
            {a: 2, b: 2},
            {a: 7, b: 7}
        ];
        $scope.currentQuestion = 0;
        $scope.status = 'Question 1';
        $scope.state = states.WAITING;
        $scope.answer = undefined;
        var startTime = undefined;

        var pad = function(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        };

        $scope.questionOrder = [];
        var foundNumbers = {};
        for (var i = 0; i < $scope.addQuestions.length; i++) {
            var question = Math.round(Math.random() * ($scope.addQuestions.length - 1));
            while (foundNumbers[question] !== undefined) {
                question = Math.round(Math.random() * ($scope.addQuestions.length - 1));
            }
            foundNumbers[question] = 1;
            $scope.questionOrder.push(question);
        }
        $scope.$watch('answer', function(newValue) {
            if ($scope.state === states.DONE) {
                return;
            }
            if (newValue !== undefined && $scope.state === states.WAITING) {
                $scope.state = states.RUNNING;
                startTime = new Date();
            }
            if ($scope.answer == $scope.addQuestions[$scope.questionOrder[$scope.currentQuestion]].a + $scope.addQuestions[$scope.questionOrder[$scope.currentQuestion]].b) {
                if ($scope.currentQuestion < $scope.addQuestions.length - 1) {
                    $scope.answer = undefined;
                    $scope.currentQuestion++;
                    $scope.status = 'Question ' + ($scope.currentQuestion + 1);
                }
                else {
                    $scope.state = states.DONE;
                    var endTime = new Date();
                    var elapsed = endTime - startTime;
//                    var milliseconds = Math.round(elapsed % 1000);
                    elapsed /= 1000;
                    var seconds = Math.round(elapsed % 60);
                    elapsed = Math.floor(elapsed / 60);
                    var minutes = Math.round(elapsed % 60);
                    var minuteString = 'minute';
                    if (minutes != 1) {
                        minuteString += 's';
                    }
                    var secondString = 'second';
                    if (seconds != 1) {
                        secondString += 's';
                    }
                    $scope.status = 'Done! Completed in ' + minutes + ' ' + minuteString + ' and ' + seconds + ' ' + secondString;
                }
            }
        });
    }
]);