angular.module('seao', ['ui.directives', 'ui.bootstrap', 'restangular'])
    .config(function(RestangularProvider) {
	RestangularProvider.setBaseUrl('/api/v1');
	RestangularProvider.setRequestSuffix('/?');
    });

function MainCtrl($scope, $http, orderByFilter, Restangular) {
    $scope.avis = Restangular.all('avis').getList();
}
