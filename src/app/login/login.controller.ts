import { FirebaseGateway } from '../services/firebase.gateway.service';

export class LoginController {
	public data: any;

	/* @ngInject */
	constructor(firebaseGateway: FirebaseGateway) {
		this.data = firebaseGateway.getObject('test');
	}

	public login(): void {
		alert('hello!');
	}
}
