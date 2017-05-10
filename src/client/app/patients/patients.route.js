(function() {
  'use strict';

   angular
    .module('app.patients')
	.run(appRun);

   appRun.$inject = ['routerHelper'];

	/* @ngInject */
	function appRun(routeHelper) {
		routeHelper.configureStates(getStates());
	}

	function getStates() {
		return [
			{
				state: 'patients',
				config: {
					url: '/patients',
					templateUrl: 'app/patients/patients.html',
					controller: 'PatientsController',
					controllerAs: 'vm',
					title: 'patients',
					settings: {
						nav: 3,
						content: '<i class="fa fa-users fa-lg"> </i>  Pacientes'
					}
				}
			}
		];
	}
})();