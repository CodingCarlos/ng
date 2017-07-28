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

			function save(course) {
				var index = _.findIndex(courses.data, ['name', course.name]);

				courses.data[index] = course;
			}
		}

})();