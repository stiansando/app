'use strict';

angular.module('appwinsApp')
  .controller('MyrouteCtrl', function ($scope) {
    $scope.message = 'Hello';

    
	var myFirebaseRef = new Firebase("https://appwinsreloaded.firebaseio.com/");

	myFirebaseRef.child('teammember').once('value', function(dataSnapshot){
		dataSnapshot.forEach(function(childSnapshot) {
			childSnapshot.forEach(function(grandChildSnapshot){

				console.log(grandChildSnapshot.val());
				console.log(childSnapshot.name());
			});
		});
		$scope.todos.push("lol");
		console.log($scope.todos);
	})

	$scope.todos = [];

	$scope.getTotalTodos = function () {
	return $scope.todos.length;
	};


	$scope.addTodo = function () {
	myFirebaseRef.child('teammember/' + $scope.formTodoText).set({kick:false})
	$scope.formTodoText = '';
	};

	$scope.clearCompleted = function () {
	    $scope.todos = _.filter($scope.todos, function(todo){
	        return !todo.done;
	    });
	};
  });
