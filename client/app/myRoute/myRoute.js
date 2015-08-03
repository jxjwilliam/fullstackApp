'use strict';

angular.module('myAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myRoute', {
        url: '/myRoute',
        templateUrl: 'app/myRoute/myRoute.html',
        controller: 'MyRouteCtrl'
      });
  });