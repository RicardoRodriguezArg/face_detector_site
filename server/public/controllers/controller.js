
var myApp = angular.module('myApp',[]);

myApp.controller('AppController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);