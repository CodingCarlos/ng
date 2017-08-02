(function() {

	angular.module('app')
		.controller('historiesController', ['$firebaseObject', '$firebaseArray', historiesController]);

		function historiesController($firebaseObject, $firebaseArray) {

			var self = this;

			// Services
			var ref = firebase.database().ref().child('histories');

			self.histories = $firebaseArray(ref);
			

			// Properties


			// Methods


			// Js action code


			// Private methods
			

		}

})();