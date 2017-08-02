(function () {

	angular.module('app')
		.factory('session', ['$localStorage', session]);

		function session($localStorage) {

			// Para producción -> $sessionStorage

			var session = {
				name: $localStorage.user || '',
				setName: setName
			};

			return session;

			function setName(name){
				session.name = name;

				$localStorage.user = session.name;
			}
		}

})();