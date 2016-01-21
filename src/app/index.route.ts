interface IExtendedState extends angular.ui.IState {
	authenticate: boolean;
}

/* @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
	$stateProvider
		.state('home', <IExtendedState> {
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'vm',
			authenticate: true
		})
		.state('login', <IExtendedState> {
			url: '/login',
			templateUrl: 'app/login/login.html',
			controller: 'LoginController',
			controllerAs: 'vm',
			authenticate: false
		});

	$urlRouterProvider.otherwise('/');
}
