/**
 * Created by tim on 19.01.2015.
 */
var AppCtx = require('../AngularContext'),
    _ = require('lodash');

module.exports = AppCtx.ApplicationContext.filter('exerciseFilter', function () {
    return function (exercises, param) {
        function showItem(list, property) {
            return _.first(_.chain(list)
                .filter(function (s) { return s.name == property })
                .map('show')
                .value());
        }
        return _.chain(exercises)
            .filter(function (e) { return (param.search === "") ? e : (e.name.toLowerCase().indexOf(param.search.toLowerCase()) > -1); })
            .filter(function (e) { return showItem(param.levels, e.level)})
            .filter(function (e) { return showItem(param.sections, e.section)})
            .filter(function (e) { return showItem(param.geraete, e.execution)})
            .value();
    }
});