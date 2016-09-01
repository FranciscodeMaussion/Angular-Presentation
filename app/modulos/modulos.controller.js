angular.module('Modulos', ['ngMaterial'])
.controller('ModulosController', function($scope, $location) {
  $scope.characteristics=[
    {
      'title': "Código limpio y bien organizado.",
      'photo': "/img/clean-code.jpg",
      'text': "",
      'selected': false
    },
    {
      'title': "Podemos encerrar el código en módulos reusables.",
      'photo': "/img/reusable.png",
      'text': "",
      'selected': false
    },
    {
      'title': "Testing",
      'photo': "/img/testing.png",
      'text': "",
      'selected': false
    },
    {
      'title': "Routing y Dependencias",
      'photo': "/img/routing.png",
      'text': "",
      'selected': false
    },
  ];

  $scope.selected = function selected(index){
    $scope.characteristics[index].selected = !$scope.characteristics[index].selected;
  }
});
