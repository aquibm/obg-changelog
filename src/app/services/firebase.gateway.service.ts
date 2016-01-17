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
}
