(function() {

	angular.module('app')
		.controller('chatController', ['$firebaseObject', '$firebaseArray', '$stateParams', 'session', '$state', chatController]);

		function chatController($firebaseObject, $firebaseArray, $stateParams, session, $state) {

			var self = this;

			if(session.name == ''){
				$state.go('login');
			}

			// Services
			var ref = firebase.database().ref().child('messages/' + $stateParams.id).orderByChild('created_at');

			self.messages = $firebaseArray(ref);
			self.newMessage = '';
			
			setTimeout(function() {
					console.log(typeof(self.messages[0].created_at))
			}, 1000);

			// Properties
			self.addMessage = addMessage;
			self.dateBeautify = dateBeautify;

			// Methods
			

			// Js action code


			// Private methods
			function addMessage() {
				event.preventDefault();

				var message = {
					user: session.name,
					text: self.newMessage,
					created_at: Date.now()
				};

				self.messages.$add(message).then(function (ref) {
					console.log('success: ' + ref.key);

					self.newMessage = '';

				}, function (error) {
					console.log(error);
				});
			}

			function dateBeautify(time) {
				return new Date(time);
			}

		}

})();