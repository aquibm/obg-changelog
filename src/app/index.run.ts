import { FirebaseGateway } from './services/firebase.gateway.service';

/* @ngInject */
export function runBlock($rootScope: angular.IRootScopeService, $state: any, firebaseGateway: FirebaseGateway) {
	$rootScope.$on('$stateChangeStart', (event: any, toState: any, toParams: any, fromState: any, fromParams: any) => {
		if (toState.authenticate && !firebaseGateway.isUserLoggedIn()) {
			$state.transitionTo('login');
			event.preventDefault();
		}

		if (!toState.authenticate && firebaseGateway.isUserLoggedIn()) {
			$state.transitionTo('home');
			event.preventDefault();
		}
	});
}
