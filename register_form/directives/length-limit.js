(function() {

	angular.module('app')
		.directive('lengthLimit', [lengthLimit]);

		function lengthLimit() {
			return {
				require: 'ngModel',
				restrict: 'A',
				link: function(scope, elem, attr, modelCtrl) {
					
					modelCtrl.$parsers.push(function lengthLimitParser(inputValue) {

						var limitedInput = (inputValue + '').substr(0, Number(elem.attr('maxlength')));

						if(limitedInput != inputValue) {
							modelCtrl.$setViewValue(limitedInput);

							modelCtrl.$render();
						}

						return limitedInput;
					});
				}
				
			};
		}
})();