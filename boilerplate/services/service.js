(function () {

	angular.module('app')
		.service('myService', myService);

		function myService() {

			var service = {
				myField: ''
			}

			return service;
		}

})();