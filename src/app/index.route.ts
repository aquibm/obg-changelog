/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'vm'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'app/login/login.html',
			controller: 'LoginController',
			controllerAs: 'vm'
		});

	$urlRouterProvider.otherwise('/');
}
