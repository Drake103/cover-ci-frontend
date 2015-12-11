import _ from 'lodash';
import enums from '../../config/enums';

var BuildRunStatusesEnum = enums.BuildRunStatusesEnum;

class BuildRunsController {
  constructor($scope, BuildRunsService) {
    this.$scope = $scope;

    let buildRuns = BuildRunsService.getBuildRuns();
    buildRuns.then(resp => {
      $scope.runs = resp.data.runs;
      _.forEach($scope.runs, r => r.isExpanded = false);
    });
  }

  getStatusClassLi(statusCode) {
    switch (statusCode) {
      case BuildRunStatusesEnum.PENDING:
        return 'cci-li-status-pending';
      case BuildRunStatusesEnum.RUNNING:
        return 'cci-li-status-running';
      case BuildRunStatusesEnum.PASSED:
        return 'cci-li-status-passed';
      case BuildRunStatusesEnum.FAILED:
        return 'cci-li-status-failed';
    }
    return 'cci-li-status-default';
  }

  getStatusIconClass(statusCode) {
    switch (statusCode) {
      case BuildRunStatusesEnum.PENDING:
        return 'fa-dot-circle-o';
      case BuildRunStatusesEnum.RUNNING:
        return 'fa-refresh';
      case BuildRunStatusesEnum.PASSED:
        return 'fa-check-circle-o';
      case BuildRunStatusesEnum.FAILED:
        return 'fa-times-circle-o';
    }
    return null;
  }

  getStepStatusIconClass(statusCode) {
    switch (statusCode) {
      case BuildRunStatusesEnum.PENDING:
        return 'fa-dot-circle-o';
      case BuildRunStatusesEnum.RUNNING:
        return 'fa-refresh';
      case BuildRunStatusesEnum.PASSED:
        return 'fa-check-square';
      case BuildRunStatusesEnum.FAILED:
        return 'fa-times-circle';
      case BuildRunStatusesEnum.CANT_RUN:
        return 'fa-minus-circle';
    }
    return null;
  }

  getStatusColorClass(statusCode) {
    switch (statusCode) {
      case BuildRunStatusesEnum.PENDING:
        return 'cci-status-pending';
      case BuildRunStatusesEnum.RUNNING:
        return 'cci-status-running';
      case BuildRunStatusesEnum.PASSED:
        return 'cci-status-passed';
      case BuildRunStatusesEnum.FAILED:
        return 'cci-status-failed';
      case BuildRunStatusesEnum.CANT_RUN:
        return 'cci-status-cant-run';
    }
    return 'cci-status-default';
  }

  expand(buildRun) {
    buildRun.isExpanded = !buildRun.isExpanded;
    if (buildRun.isExpanded === true) {
      _.forEach(this.$scope.runs, r => {
        if (r === buildRun) return;
        r.isExpanded = false;
      });
    }
  }
}

BuildRunsController.$inject = ['$scope', 'BuildRunsService'];
export default BuildRunsController;
