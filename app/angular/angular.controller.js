angular.module('Angular', ['ngMaterial'])
.controller('AngularController', function($scope, $location) {
  $scope.characteristics=[
    'Framework para hacer aplicaciones',
    'MVC',
    'Javascript',
    'SPA (Single-Page Applications)'
  ];
  $scope.ready = -1;
  $scope.next= function next(){
    $scope.ready += 1;
  };
});
