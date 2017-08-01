(function() {

	angular.module('app')
		.directive('validationError', [validationError]);

		function validationError() {
			return {
				restrict: 'E',
				templateUrl: 'views/directives/validation-error.html',
				scope: {
					field: '=field',
					typesStr: '@types',
					maxlength: '=maxlength',
					minlength: '=minlength',
					patternName: '@pattern'
				},
				link: function(scope) {
					scope.types = scope.typesStr.split(' ') || [];

					scope.text = {
						required: 'El campo es obligatorio',
						email: 'No es una dirección de email válida',
						maxlength: 'El campo debe tener ' + (scope.maxlength || 0) + ' catacteres como máximo',
						minlength: 'El campo debe tener ' + (scope.minlength || 0) + ' catacteres como mínimo',
						pattern: 'No cumple el patrón ' + (scope.patternName || ''),
						default: 'Error de validación'
					}

					scope.level = {
						required: 'danger',
						email: 'info',
						maxlength: 'warning',
						minlength: 'warning',
						pattern: 'warning',
						default: 'warning'
					}
				}
				
			};
		}
})();