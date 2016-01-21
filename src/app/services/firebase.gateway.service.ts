export class FirebaseGateway {
	private basePath: string;

	/* @ngInject */
	constructor(private $firebaseObject: any, private $firebaseArray: any, private Firebase: any) {
		this.basePath = 'https://obg-changelog.firebaseio.com/';
	}

	public getObject(path: string): any {
		var ref = new this.Firebase(this.basePath + path);
		return this.$firebaseObject(ref);
	}

	public getArray(path: string): any {
		var ref = new this.Firebase(this.basePath + path);
		return this.$firebaseArray(ref);
	}

	public getReference(): any {
		return new this.Firebase(this.basePath);
	}

	public isUserLoggedIn(): boolean {
		var ref = new this.Firebase(this.basePath);
		var authData = ref.getAuth();

		if (authData) {
			return true;
		}

		return false;
	}
}
