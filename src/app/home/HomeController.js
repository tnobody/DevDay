/**
 * Created by tim on 26.12.2014.
 */

var HomeController = function($scope) {
  $scope.daysSinceLastUnit = 5;
};

HomeController.$inject = ['$scope'];

module.exports = HomeController;