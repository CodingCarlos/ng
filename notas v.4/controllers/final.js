(function() {

	angular.module('app')
		.controller('finalController', ['notes', finalController]);

		function finalController(notes) {

			var self = this;

			// Services

			// Properties
			self.result = {};

			// Methods
			self.calculate = calculate; 


			// Js action code
			console.log(1);
			

			// Private methods

			function calculate() {

				clear();

				for(i = 0; i < notes.data.length; i++) {

					//for(a = 0; a < notes.data[i].length; a++) {
					for(a in notes.data[i]) {
						self.result[a] += Number(notes.data[i][a].replace(',','.'));
						console.log(notes.data[i]);
					}
				}
			}

			function clear() {

				self.result = {};

				for(i = 0; i < notes.data.length; i++) {

					for(a in notes.data[i]) {
						self.result[a] = 0;
					}
				}
			}
		}
})();