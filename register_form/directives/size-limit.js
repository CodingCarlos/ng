(function() {

	angular.module('app')
		.directive('sizeLimit', [sizeLimit]);

		function sizeLimit() {
			return {
				require: 'ngModel',
				restrict: 'A',
				link: function(scope, elem, attr, modelCtrl) {
					
					modelCtrl.$validators.size = function sizeLimitValidator(modelValue, viewValue) {

						console.log(123);

						if(modelCtrl.$isEmpty(modelValue)) {
							return true;
						}

						if(viewValue.size < 150) {
							return true;
						}
						
						return false;
					};
				}
				
			};
		}
})();