var _ = require('lodash');
require('./ExersiceService');
require('./ExerciseFilter');
require('./FilterOptionDirective');
var ExerciseListController = function ($scope, ExerciseService) {
    $scope.exercises = [];
    ExerciseService.loadAllExercise()
        .success(function (data) {
            $scope.exercises = _.chain(data)
                .sortBy(data, ['section', 'name'])
                .value();
            $scope.filterOptions = ExerciseService.getFilterOptionsFromExercises(data);
        })
        .error(function (data) {
            $scope.error = "Fehler beim Laden"
            $scope.errorData = data;
        });
}
ExerciseListController.$inject = ['$scope', 'ExerciseService'];
module.exports = ExerciseListController;