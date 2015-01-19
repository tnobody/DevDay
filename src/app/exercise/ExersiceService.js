var AppCtx = require('../AngularContext'),
    _ = require('lodash')
module.exports = AppCtx.ApplicationContext.factory('ExerciseService', function ($http) {
    return {
        loadAllExercise: function () {
            var context = this;
            return $http.get('data/exercises.json')
                .success(function (data) {

                })
                .error(function () {
                    console.log("ERROR", arguments);
                })
        },
        getFilterOptionsFromExercises: function (exercises) {
            function createUniqListByFieldName(exercises, fieldName) {
                return _.chain(exercises)
                    .map(function (o) { return o[fieldName] })
                    .filter(function(o) { return o != ''})
                    .uniq()
                    .map(function (o) { return { name: o, show: true }; })
                    .sortBy(fieldName)
                    .value()
            }
            return {
                search : '',
                sections: createUniqListByFieldName(exercises, 'section'),
                levels: createUniqListByFieldName(exercises, 'level'),
                geraete: createUniqListByFieldName(exercises, 'execution')
            }
        }
    }
});