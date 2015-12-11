import angular from 'angular';
import 'angular-route';
import 'angular-resource';

import BuildRunDetailed from './buildRunDetailed/buildRunDetailed.directive';

import BuildRunsService from './buildRuns.service';
import BuildRunsController from './buildRuns.controller';

let moduleName = 'BuildRunsModule';

let ngModule = angular.module(moduleName, ['ngRoute', 'ngResource']);

ngModule.directive('buildRunDetailed', BuildRunDetailed.directiveFactory);

ngModule.factory('BuildRunsService', BuildRunsService.createInstance);
ngModule.controller('BuildRunsController', BuildRunsController);

ngModule.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/modules/buildRuns/buildRuns.view.html',
      controller: 'BuildRunsController',
    });
});

export default moduleName;
