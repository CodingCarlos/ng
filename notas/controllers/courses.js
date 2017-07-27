(function() {

	angular.module('app')
		.controller('coursesController', coursesController);

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

				notes.data = courses.data[id].data;
				notes.name = courses.data[id].name;
				notes.evals = courses.data[id].evals;

			}

		}

})();