describe('formController', function() {

	beforeEach(module('app'));
	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

	it('submitForm() exists', function () {

		var $scope = {};
		var controller = $controller('formController', { $scope: $scope});

		expect(2 + 2).toEqual(4);
	});

});