(function() {

	angular.module('app')
		.controller('coursesController', ['courses', 'notes', coursesController]);

		function coursesController(courses, notes) {

			var self = this;

			// Services
			self.courses = courses;

			// Properties
			self.newCourse = {};
			

			// Methods
			self.add = add;
			self.view = view;


			// Js action code
			

			// Private methods
			function add() {

				courses.addCourse({
					name: self.newCourse.name || 'Curso sin nombre',
					evals: self.newCourse.evals || 1
				});

				self.newCourse = {};

			}

			function view(id) {
				
				// Para evitar binding creamos un objeto intermedio
				var obj = courses.data[id];

				// Hay que formatear los campos para convertir en tipos simples y no en punteros
				notes.data = Number(obj.data);
				notes.name = obj.name + '';
				notes.evals = Number(obj.evals);

				document.location.hash = '#/notes';

			}

		}

})();