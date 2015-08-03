'use strict';

angular.module('myAppApp')
  .directive('myDirective', function () {
    return {
      templateUrl: 'app/myDirective/myDirective.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });