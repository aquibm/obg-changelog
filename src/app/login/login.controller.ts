import { FirebaseGateway } from '../services/firebase.gateway.service';

export class LoginController {
	public data: any;
	public email: string;
	public password: string;

	/* @ngInject */
	constructor(private firebaseGateway: FirebaseGateway, private toastr: any, private $state: any) {
		this.clearCredentials();
	}

	public login(formInvalid: boolean): void {
		if (formInvalid) {
			this.toastr.error('Please enter a valid email and password');
			return;
		}

		var ref = this.firebaseGateway.getReference();

		ref.authWithPassword({
			email: this.email,
			password: this.password
		}, (error: Error, authData: any) => {
			if (error) {
				this.toastr.error(error.message);
				return;
			}

			this.clearCredentials();
			this.$state.transitionTo('home');
		});
	}

	private clearCredentials(): void {
		this.email = '';
		this.password = '';
	}
}
