(function () {

	angular.module('app', ['ngRoute']);

	angular.module('app').config(['$routeProvider', routeConfig]);

	function routeConfig($routeProvider) {

		$routeProvider
			.when("/courses", {
				templateUrl: "views/courses.html"
			})
			.when("/notes", {
				templateUrl: "views/notes.html"
			})
			.otherwise({
				templateUrl: "views/courses.html"
			});
	}

})();