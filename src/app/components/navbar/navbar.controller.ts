import { FirebaseGateway } from '../../services/firebase.gateway.service';

export class NavbarController {
	/* @ngInject */
	constructor(private firebaseGateway: FirebaseGateway, private $state: any) { }

	public isLoggedIn(): boolean {
		return this.firebaseGateway.isUserLoggedIn();
	}

	public logout(): void {
		var ref = this.firebaseGateway.getReference();
		ref.unauth();
		this.$state.transitionTo('login');
	}
}
