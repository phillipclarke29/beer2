'use strict';

angular.module('beer2App.auth', [
  'beer2App.constants',
  'beer2App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
