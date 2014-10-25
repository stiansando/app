'use strict';

angular.module('appwinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('investorlista', {
        url: '/investorlista',
        templateUrl: 'app/investorlista/investorlista.html',
        controller: 'InvestorlistaCtrl'
      });
  });