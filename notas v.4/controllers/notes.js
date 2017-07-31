(function() {

	angular.module('app')
		.controller('notesController', ['notes', 'courses', '$stateParams', 'subjects', notesController]);

		function notesController(notes, courses, $stateParams, subjects) {

			var self = this;

			// Services
			self.service = notes;
			self.subjects = subjects;

			// Properties
			self.active = 0;
			self.error = '';

			// Methods
			self.setActive = setActive; 
			self.save = courses.save;


			// Js action code
			if(courses.data.length > $stateParams.id) {
				notes.data = courses.data[$stateParams.id].data;
				notes.name = courses.data[$stateParams.id].name + '';
				notes.evals = Number(courses.data[$stateParams.id].evals);
			}else if(!$stateParams.id) {
				self.error = 'No has seleccionado ningún curso';
			}else {
				self.error = 'No existe ese curso';
			}
			

			// Private methods

			function setActive(active) {
				self.active = active;
			}			

		}
})();