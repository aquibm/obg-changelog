/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LoginController } from './login/login.controller';
import { FirebaseGateway } from './services/firebase.gateway.service';
import { focusWhen } from './directives/focus.directive';
import { notesFilter } from './filters/note.filter';

module obgChangelog {
	'use strict';

	angular.module('obgChangelog', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr', 'firebase'])
		.config(config)
		.config(routerConfig)
		.run(runBlock)
		.service('firebaseGateway', FirebaseGateway)
		.controller('MainController', MainController)
		.controller('LoginController', LoginController)
		.directive('focusWhen', focusWhen)
		.filter('notesFilter', notesFilter);
}
