(function () {

	angular.module('app', ['ui.router', 'ui.bootstrap', 'file-model', 'firebase', 'ngStorage']);

	angular.module('app').config(['$stateProvider', '$urlRouterProvider', routeConfig]);

	function routeConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/login');

		$stateProvider
			.state('view', {
				url: "/view",
				templateUrl: "views/view.html"
			})
			.state('histories', {
				url: "/histories",
				templateUrl: "views/histories.html"
			})
			.state('chat', {
				url: "/chat/:id",
				templateUrl: "views/chat.html"
			})
			.state('login', {
				url: "/login",
				templateUrl: "views/login.html"
			});
	}

})();