/* @ngInject */
export function onEnterKey($timeout: angular.ITimeoutService): angular.IDirective {
	return {
		restrict: 'A',
		link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: any) => {

			element.bind('keydown keypress', (event: any) => {
				if (event.which === 13) {
					$timeout(() => {
						scope.$eval(attrs.onEnterKey, { 'event': event });
					});

					event.preventDefault();
				}
			});

		}
	};
}
