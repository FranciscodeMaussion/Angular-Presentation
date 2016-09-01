angular.module('Presentacion', ['ngMaterial', 'ngRoute','Angular','Modulos','Controlador','Vista'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('amber');
})
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "angular/angular.html",
        controller : "AngularController"
    })
    .when("/modulos", {
        templateUrl : "modulos/modulos.html",
        controller : "ModulosController"
    })
    .when("/controlador", {
        templateUrl : "controlador/controlador.html",
        controller : "ControladorController"
    })
    .when("/vista", {
        templateUrl : "vista/vista.html",
        controller : "VistaController"
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
