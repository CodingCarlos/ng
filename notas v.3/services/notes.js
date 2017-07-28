(function () {

	angular.module('app')
		.service('notes', [notesService]);

		function notesService() {

			var notes = {
				data: [],
				evals: 5
			}

			return notes;
		}

})();