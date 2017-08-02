describe('coursesController', function() {

	beforeEach(module('app'));
	var $controller;
	var $service;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

	beforeEach(inject(function(courses){
		$service = courses;
	}));

	it('add() exists', function () {

		var $scope = {};
		var controller = $controller('coursesController', { $scope: $scope, courses: $service, notes: {}, $state: {} });

		expect(controller.add).toBeDefined();
	});

	it('asd() not exists', function () {

		var $scope = {};
		var controller = $controller('coursesController', { $scope: $scope, courses: $service, notes: {}, $state: {} });

		expect(controller.asd).toBeUndefined();
	});

	describe('Add course', function () {

		var courseAdd = {name: 'Diseño', evals: 5};

		it('Set course name', function () {

			var $scope = {};
			var controller = $controller('coursesController', { $scope: $scope, courses: $service, notes: {}, $state: {} });
			controller.newCourse = courseAdd;

			expect(controller.newCourse.name).toEqual(courseAdd.name);

		});

		it('Set course evals', function () {

			var $scope = {};
			var controller = $controller('coursesController', { $scope: $scope, courses: $service, notes: {}, $state: {} });
			controller.newCourse = courseAdd;

			expect(controller.newCourse.evals).toEqual(courseAdd.evals);

		});

		it('Add course to service', function () {

			var $scope = {};
			var controller = $controller('coursesController', { $scope: $scope, courses: $service, notes: {}, $state: {} });
			controller.newCourse = courseAdd;
			controller.add();

			expect($service.data[0].name).toEqual(courseAdd.name);

		});

		it('Course persist', function () {

			expect($service.data[0].name).toEqual(courseAdd.name);

		});
	});

});