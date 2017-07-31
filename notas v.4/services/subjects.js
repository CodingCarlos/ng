(function () {

	angular.module('app')
		.service('subjects', [subjectsService]);

		function subjectsService() {

			var subjects = {
				data: [],
				addSubject: addSubject
			}

			return subjects;

			function addSubject(data) {
				data.data = [];

				subjects.data.push(data);

			}

		}

})();