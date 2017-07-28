(function() {

	angular.module('app')
		.filter('range', [rangeFilter]);

		function rangeFilter() {

			return function(input, loops) {

				loops = Number(loops);

				for(i = 0; i < loops; i++) {

					input.push(i);

				}

				return input;
			}

		}

})();