(function () {

	angular.module('app', ['ui.router']);

	angular.module('app').config(['$stateProvider', '$urlRouterProvider', routeConfig]);

	function routeConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/courses');

		$stateProvider
			.state('courses', {
				url: "/courses",
				templateUrl: "views/courses.html"
			})
			.state('notes', {
				url: "/notes/:id",
				templateUrl: "views/notes.html"
			});
	}

})();