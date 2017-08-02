(function() {

	angular.module('app')
		.controller('loginController', ['session', '$state', loginController]);

		function loginController(session, $state) {

			var self = this;

			// Services
			

			// Properties
			self.username = session.name;

			// Methods
			self.login = login;
			

			// Js action code


			// Private methods
			function login() {
				event.preventDefault();

				session.setName(self.username); 

				$state.go('histories');
			}

		}

})();