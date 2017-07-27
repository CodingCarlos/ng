(function() {

	angular.module('app')
		.controller('myController', myController);

		function myController(myService) {

			var self = this;

			self.service = myService;

			self.myFunction = function() {
				console.log('Ok!');
			}
		}
})();