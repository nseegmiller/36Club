angular.module('thirtySixFacts.controllers').controller('FactsCntl', ['$scope', '$location',
    function($scope, $location) {
        $scope.$location = $location;

        var states = {
            WAITING: 0,
            RUNNING: 1,
            DONE: 2
        };

        var grade = $location.path().substring(1);

        if (Object.keys(mathFacts[grade]).length > 1) {
            mathFacts[grade]['humdinger'] = [];
            angular.forEach(mathFacts[grade], function (value, key) {
                if (key !== 'humdinger') {
                    //console.log(value, key);
                    mathFacts[grade]['humdinger'] = mathFacts[grade]['humdinger'].concat(value);
                }
            });
            //console.log("Grade: " + grade, mathFacts[grade]['humdinger'], mathFacts[grade]['humdinger'].length);
        }

        // Safe fall back since all grades have addition
        if (mathFacts[grade][$scope.option.mode] === undefined) {
            $scope.option.mode = 'addition';
        }

        $scope.$watch('option.mode', function() {
           buildQuestionList();
        });

        var pad = function(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        };

        var startTime = undefined;
        var buildQuestionList = function() {
            $scope.questionOrder = [];
            var foundNumbers = {};
            $scope.questionList = mathFacts[grade][$scope.option.mode];
            for (var i = 0; i < $scope.questionList.length; i++) {
                var question = Math.round(Math.random() * ($scope.questionList.length - 1));
                while (foundNumbers[question] !== undefined) {
                    question = Math.round(Math.random() * ($scope.questionList.length - 1));
                }
                foundNumbers[question] = 1;
                $scope.questionOrder.push(question);
            }

            $scope.currentQuestion = 0;
            $scope.status = 'Question 1 of ' + $scope.questionList.length;
            $scope.state = states.WAITING;
            $scope.answer = undefined;
            startTime = undefined;
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
            var answer = 0,
                thisQuestion = $scope.questionList[$scope.questionOrder[$scope.currentQuestion]];
            if (thisQuestion.op === '+') {
                answer = thisQuestion.a + thisQuestion.b;
            }
            else if (thisQuestion.op === '-') {
                answer = thisQuestion.a - thisQuestion.b;
            }
            else if (thisQuestion.op === '*') {
                answer = thisQuestion.a * thisQuestion.b;
            }
            else if (thisQuestion.op === '/') {
                answer = thisQuestion.a / thisQuestion.b;
            }

            if (parseInt($scope.answer) === answer) {
                if ($scope.currentQuestion < $scope.questionList.length - 1) {
                    $scope.answer = undefined;
                    $scope.currentQuestion++;
                    $scope.status = 'Question ' + ($scope.currentQuestion + 1) + ' of ' + $scope.questionList.length;
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

        $scope.reloadPage = function() {
            location.reload();
        };
    }
]);