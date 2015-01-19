/**
 * Created by tim on 19.01.2015.
 */
var AppCtx = require('../AngularContext');

AppCtx.ApplicationContext.directive('filterOption', function() {
    return {
        template : '' +
            '<li class="list-group-item" ng-click="item.show = !item.show" ng-repeat="item in ngModel">' +
            '<i class="fa" ng-class="getElementClass(item)"></i>' +
            ' {{item.name}}' +
            '</li>',
        restrict : 'E',
        scope: {
            ngModel: '='
        },
        link: function(scope, element, attrs) {
            element.css('cursor','pointer');
            scope.getElementClass = function(item) {
                return item.show ? 'fa-check-square-o' : 'fa-square-o';
            }
        }
    }
});