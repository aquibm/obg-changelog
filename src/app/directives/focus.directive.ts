/* @ngInject */
export function focusWhen($timeout: angular.ITimeoutService): angular.IDirective {
	return {
		restrict: 'A',
		link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: any) => {
			scope.$watch(attrs.focusWhen, (newValue: boolean, oldValue: boolean) => {
				if (newValue !== oldValue && newValue === true) {
					$timeout(() => {
						console.log('Linked');
						element[0].focus();
					});
				}
			});
		}
	};
}
