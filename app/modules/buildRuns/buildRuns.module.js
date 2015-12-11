import angular from 'angular';
import 'angular-route';
import 'angular-resource';

import TestStepDetailed from './testStepDetailed/testStepDetailed.directive';
import BuildRunDetailed from './buildRunDetailed/buildRunDetailed.directive';
import BuildRunLi from './buildRunLi/buildRunLi.directive';

import BuildRunsService from './buildRuns.service';
import BuildRunsController from './buildRuns.controller';

let moduleName = 'BuildRunsModule';

let ngModule = angular.module(moduleName, ['ngRoute', 'ngResource']);

ngModule.directive('testStepDetailed', TestStepDetailed.directiveFactory);
ngModule.directive('buildRunDetailed', BuildRunDetailed.directiveFactory);
ngModule.directive('buildRunLi', BuildRunLi.directiveFactory);

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
