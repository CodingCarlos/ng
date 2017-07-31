(function() {

	angular.module('app')
		.controller('subjectsController', ['subjects', '$state', '$stateParams', subjectsController]);

		function subjectsController(subjects, $state, $stateParams) {

			var self = this;

			// Services
			self.subjects = subjects;

			// Properties
			self.newSubject = {};
			

			// Methods
			self.add = add;
			self.viewCourse = viewCourse;

			// Js action code
			

			// Private methods
			function add() {

				subjects.addSubject({
					name: self.newSubject.name || 'Asignatura_sin_nombre',
					label: self.newSubject.label || 'Asignatura sin label'
				});

				self.newSubject = {};

			}

			function viewCourse() {

				$state.go('notes', {id: $stateParams.id});

			}

		}

})();