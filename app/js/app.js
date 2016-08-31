angular.module('presentacion', ['ngMaterial', 'ngRoute'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('amber');
})
.config(function($routeProvider) {
    $routeProvider
    .when("/angular", {
        templateUrl : "angular.html"
    })
    .when("/modelo", {
        templateUrl : "modelo.html"
    })
    .when("/controlador", {
        templateUrl : "controlador.html"
    })
    .when("/vista", {
        templateUrl : "vista.html"
    })
    .when("/ejemplo", {
        templateUrl : "ejemplo.html"
    });
})
.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  });
