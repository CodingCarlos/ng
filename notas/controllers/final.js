(function() {

	angular.module('app')
		.controller('finalController', finalController);

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
					self.result.angular += Number(notes.data[i].angular.replace(',', '.'));
					self.result.js += Number(notes.data[i].js.replace(',', '.'));
					self.result.css += Number(notes.data[i].css.replace(',', '.'));
				}
			}

			function clear() {

				self.result = {
					angular: 0,
					js: 0,
					css: 0
				};
			}
		}
})();