'use strict';

angular.module('appwinsApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Regnskap',
      'link': '/regnskap'
    },
    {
      'title': 'Investorlista',
      'link': '/investorlista'
    },
    {
      'title': 'Lageret',
      'link': '/lageret'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });