(function () {

	angular.module('app')
		.service('courses', coursesService);

		function coursesService() {

			var courses = {
				data: [],
				addCourse: addCourse
			}

			return courses;

			function addCourse(data) {
				data.data = [];

				courses.data.push(data);

			}
		}

})();