'use strict';
angular.module ('com.module.core')
  .config (function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state ('router', {
    url: '/router',
    template: '<div class="lockscreen" style="height: 100%"></div>',
    controller: 'RouteCtrl'
  })
    .state ('app', {
    abstract: true,
    url: '/app',
    templateUrl: 'modules/core/views/app.html',
    controller: 'MainCtrl',
    data: {
      pageTitle: '',
      pageSubtitle: ''
    }
  })
    .state ('app.home', {
    url: '',
    templateUrl: 'modules/core/views/home.html',
    controller: 'HomeCtrl',
    data: {
      pageTitle: 'Home',
      pageSubtitle: 'Welkom!'
    },
    ncyBreadcrumb: {
      label: 'Home'
    }
  });
  $urlRouterProvider.otherwise ('/router');
});
