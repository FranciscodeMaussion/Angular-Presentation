angular.module('Presentacion', ['ngMaterial', 'ngRoute'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('amber');
})
.config(function($routeProvider) {
    $routeProvider
    .when("/angular", {
        templateUrl : "angular/angular.html"
    })
    .when("/modelo", {
        templateUrl : "modelo/modelo.html"
    })
    .when("/controlador", {
        templateUrl : "/controlador/controlador.html"
    })
    .when("/vista", {
        templateUrl : "vista/vista.html"
    })
    .when("/ejemplo", {
        templateUrl : "ejemplo/ejemplo.html"
    });
})
.controller('ListCtrl', function($scope, $mdDialog) {
  $scope.goRoute = function(ruta){
    
  }
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
