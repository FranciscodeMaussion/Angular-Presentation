angular.module('Demo', ['ngMaterial'])
.controller('DemoController', function($scope, $location) {
  $scope.contacto = {
    'nombre':'Dalmiro Vilca',
    'telefono':'351504315'
  }
  $scope.lista = [];
  $scope.agregarALista = (function(){
    $scope.lista.push({
      'nombre' : $scope.contacto.nombre,
      'telefono' : $scope.contacto.telefono
    });
  });
});
