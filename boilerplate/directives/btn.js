(function() {

	angular.module('app')
		.directive('btn', [buttonDirective]);

		function buttonDirective() {
			return {
				restrict: 'E',
				templateUrl: 'views/directives/btn.html',
				scope: {
					icon: '@icon',
					content: '@content',
					type: '@type'
				}
			};
		}
})();