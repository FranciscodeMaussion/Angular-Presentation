angular.module('Presentacion', ['ngMaterial', 'ngRoute'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('amber');
})
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "angular/angular.html"
    })
    .when("/modelo", {
        templateUrl : "modelo/modelo.html"
    })
    .when("/controlador", {
        templateUrl : "controlador/controlador.html"
    })
    .when("/vista", {
        templateUrl : "vista/vista.html"
    })
    .when("/ejemplo", {
        templateUrl : "ejemplo/ejemplo.html"
    });
})
.controller('ListCtrl', function($scope, $location) {
  $scope.goRoute = function(ruta){
    $location.path( ruta );
  }
});
