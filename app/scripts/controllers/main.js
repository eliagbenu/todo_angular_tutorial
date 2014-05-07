'use strict';

angular.module('todoApp')
  .controller('MainCtrl', function ($scope,localStorageService) {

/*    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
*/
/*    $scope.todos = ['Item 1', 'Item 2', 'Item 3','Item 4','Item 5'];
*/

  var todosInStore = localStorageService.get('todos');

  $scope.todos = todosInStore && todosInStore.split('\n') || [];

  $scope.$watch('todos', function () {
      localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);
  
	$scope.addTodo = function () {
	  $scope.todos.push($scope.todo);
	  $scope.todo = '';
	};

 $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

  });

