(function() {

	angular.module('app')
		.directive('subject', ['notes', subjectDirective]);

		function subjectDirective(notes) {
			return {
				restrict: 'E',
				templateUrl: 'views/directives/subject.html',
				scope: {
					label: '@label',
					name: '@name',
					eval: '=eval'
				},
				link: function(scope, elem, attrs) {
					scope.notesServ = notes;

					scope.format = function format(){
						notes.data[scope.eval][scope.name] = notes.data[scope.eval][scope.name].replace(',','.');
					}
				}
			};
		}
})();