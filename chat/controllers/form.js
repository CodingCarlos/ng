(function() {

	angular.module('app')
		.controller('formController', ['$scope', '$firebaseObject', '$firebaseArray', formController]);

		function formController($scope, $firebaseObject, $firebaseArray) {

			//var self = this;

			// Services
			var ref = firebase.database().ref().child('users');

			$scope.sync = $firebaseArray(ref);
			

			// Properties
			$scope.options = {
			    formatYear: 'yy',
			    maxDate: new Date(2020, 5, 22),
			    minDate: new Date(),
			    startingDay: 1
			  };
			

			// Methods
			$scope.submitForm = submitForm;
			$scope.removeUser = removeUser;
			$scope.editUser = editUser;
			/*$scope.$watch('ValidationForm.validateDocValue', function(file){
				if(file){
					console.log(file);
				}
			});*/


			// Js action code


			// Private methods
			function submitForm() {
				event.preventDefault();
				if(!$scope.ValidationForm.$valid) {

					$scope.formErrors = true;
					
				}else {

					//$scope.sync.registerForm = $scope.ValidationForm;
					$scope.ValidationForm.validatePhoneValue = Number($scope.ValidationForm.validatePhoneValue);

					if($scope.ValidationForm.$id) {

						$scope.sync[$scope.sync.$indexFor($scope.ValidationForm.$id)] = $scope.ValidationForm;

						$scope.sync.$save($scope.sync.$indexFor($scope.ValidationForm.$id)).then(function (ref) {
							console.log('success: ' + ref.key);
						}, function (error) {
							console.log(error);
						});	
					}else {
						$scope.sync.$add($scope.ValidationForm).then(function (ref) {
							console.log('success: ' + ref.key);

							$scope.ValidationForm.$id = ref.key;
						}, function (error) {
							console.log(error);
						});
					}

				}

				//console.log($scope.ValidationForm);
			}

			function removeUser(id) {
				$scope.sync.$remove($scope.sync.$getRecord(id)).then(function (ref) {
					console.log('success: ' + ref.key);
				}, function (error) {
					console.log(error);
				});
			}

			function editUser(id) {
				_.merge($scope.ValidationForm, $scope.sync.$getRecord(id));
			}

		}

})();