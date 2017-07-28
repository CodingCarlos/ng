(function() {

	angular.module('app')
		.controller('notesController', notesController);

		function notesController(notes, courses) {

			var self = this;

			// Services
			self.service = notes;

			// Properties
			self.active = 0;

			// Methods
			self.setActive = setActive; 
			self.save = courses.save;
			self.format = format;


			// Js action code
			console.log(1);
			

			// Private methods

			function setActive(active) {
				self.active = active;
			}

			function format(field){
				notes.data[self.active][field] = notes.data[self.active][field].replace(',','.');
			}

		}
})();