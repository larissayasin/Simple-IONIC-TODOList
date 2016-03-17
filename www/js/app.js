// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('AppCtrl', function($scope, $ionicPopup) {
  $scope.tarefasFeitas = 0;
  $scope.nivel = 0;

  $scope.items = [
    {
      titulo: 'Comprar Leite',
      descricao: 'Comprar 2 caixas de Leite Integral',
      periodo: '01/01/2001',
      imgURL: 'http://plugcitarios.com/wp-content/uploads/2012/08/mamiferos-pamalat.jpg'
    }
  ];

  $scope.clickk = function(item) {
    alert('MAOE =)');
    console.log(item);
  };

  $scope.mostarItem = function(item) {
    var alertPopup = $ionicPopup.alert({
      title: 'Tarefa ' + item.titulo,
      template: 'Descrição: ' + item.descricao + '</br>Data: ' + item.periodo + '</br><img ng-src="'+item.imgURL +'" />'
    });

    alertPopup.then(function(res) {
      console.log('Tarefa exibida');
    });
  };

  $scope.moverItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  $scope.removerTarefa = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  $scope.realizarTarefa = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
    $scope.tarefasFeitas = 1 + $scope.tarefasFeitas;
    if($scope.tarefasFeitas>=5){
      $scope.tarefasFeitas = 0;
      $scope.nivel = $scope.nivel + 1;
      alert('Você subiu de nível =)');
    }
  };

  $scope.addItemClick =  function(){
     $scope.data = {};
    $ionicPopup.show({
      title: 'Nova Tarefa',
      templateUrl: 'popup.html',
      scope: $scope,
      buttons: [{
        text: 'Cancelar'
      }, {
        text: 'Salvar',
        type: 'button-positive',
        onTap: function(e) {
          console.log('titulo: ' + $scope.data.titulo);

          var novoItem = {
            titulo: $scope.data.titulo,
            descricao: $scope.data.descricao,
            periodo: $scope.data.periodo,
            imgURL: $scope.data.imgURL
          }
          return $scope.items.push(novoItem);
        }
      }]
    });
  };
});
