angular.module('thirtySixClub.controllers').controller('MainCntl', ['$scope', 'localStorageService',
    function($scope, localStorageService) {
        var states = {
            WAITING: 0,
            RUNNING: 1,
            DONE: 2
        };
        var addQuestions = [
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

        var subtractQuestions = [
            {a: 13, b: 5},
            {a: 14, b: 5},
            {a: 12, b: 6},
            {a: 13, b: 6},
            {a: 14, b: 6},
            {a: 15, b: 6},
            {a: 14, b: 7},
            {a: 15, b: 7},
            {a: 16, b: 7},
            {a: 16, b: 8},
            {a: 17, b: 8},
            {a: 18, b: 9},
            {a: 9, b: 4},
            {a: 10, b: 4},
            {a: 11, b: 4},
            {a: 12, b: 4},
            {a: 13, b: 4},
            {a: 10, b: 5},
            {a: 11, b: 5},
            {a: 12, b: 5},
            {a: 6, b: 3},
            {a: 7, b: 3},
            {a: 8, b: 3},
            {a: 9, b: 3},
            {a: 10, b: 3},
            {a: 11, b: 3},
            {a: 12, b: 3},
            {a: 8, b: 4},
            {a: 8, b: 2},
            {a: 4, b: 2},
            {a: 9, b: 2},
            {a: 5, b: 2},
            {a: 10, b: 2},
            {a: 6, b: 2},
            {a: 11, b: 2},
            {a: 7, b: 2}
        ];

        var allQuestions = addQuestions.concat(subtractQuestions);

        $scope.modes = {
            ADD: 0,
            SUBTRACT: 1,
            MIXED: 2
        };

        $scope.mode = parseInt(localStorageService.get('lastMode')) || $scope.modes.ADD;

        $scope.currentQuestion = 0;
        $scope.status = 'Question 1';
        $scope.state = states.WAITING;
        $scope.answer = undefined;
        var startTime = undefined;

        $scope.changeMode = function(mode) {
            $scope.mode = mode;
            localStorageService.add('lastMode', $scope.mode);
            buildQuestionList();
        };

        var pad = function(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        };

        var buildQuestionList = function() {
            $scope.questionOrder = [];
            var foundNumbers = {};
            $scope.questionList = [];
            if ($scope.mode === $scope.modes.ADD) {
                $scope.questionList = addQuestions;
            }
            else if ($scope.mode === $scope.modes.SUBTRACT) {
                $scope.questionList = subtractQuestions;
            }
            else if ($scope.mode === $scope.modes.MIXED) {
                $scope.questionList = allQuestions;
            }
            for (var i = 0; i < $scope.questionList.length; i++) {
                var question = Math.round(Math.random() * ($scope.questionList.length - 1));
                while (foundNumbers[question] !== undefined) {
                    question = Math.round(Math.random() * ($scope.questionList.length - 1));
                }
                foundNumbers[question] = 1;
                $scope.questionOrder.push(question);
            }
            console.log($scope.questionOrder);
        };
        buildQuestionList();

        $scope.$watch('answer', function(newValue) {
            if ($scope.state === states.DONE) {
                return;
            }
            if (newValue !== undefined && $scope.state === states.WAITING) {
                $scope.state = states.RUNNING;
                startTime = new Date();
            }
            var answer = 0;
            if ($scope.mode === $scope.modes.ADD) {
                answer = $scope.questionList[$scope.questionOrder[$scope.currentQuestion]].a + $scope.questionList[$scope.questionOrder[$scope.currentQuestion]].b;
            }
            else if ($scope.mode === $scope.modes.SUBTRACT) {
                answer = $scope.questionList[$scope.questionOrder[$scope.currentQuestion]].a - $scope.questionList[$scope.questionOrder[$scope.currentQuestion]].b;
            }
            if ($scope.mode === $scope.modes.MIXED) {
                if ($scope.questionOrder[$scope.currentQuestion] < addQuestions.length) {
                    answer = $scope.questionList[$scope.questionOrder[$scope.currentQuestion]].a + $scope.questionList[$scope.questionOrder[$scope.currentQuestion]].b;
                }
                else {
                    answer = $scope.questionList[$scope.questionOrder[$scope.currentQuestion]].a - $scope.questionList[$scope.questionOrder[$scope.currentQuestion]].b;
                }
            }
            if (parseInt($scope.answer) === answer) {
                if ($scope.currentQuestion < $scope.questionList.length - 1) {
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