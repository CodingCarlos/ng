(function() {

	angular.module('app')
		.controller('notesController', notesController);

		function notesController(notes) {

			var self = this;

			// Services
			self.service = notes;

			// Properties
			self.active = 0;

			// Methods
			self.setActive = setActive; 


			// Js action code
			console.log(1);
			

			// Private methods

			function setActive(active) {
				self.active = active;
			}
		}
})();