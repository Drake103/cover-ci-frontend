import _ from 'lodash';
import enums from '../../config/enums';
import statusesHelper from './helpers/statuses.helper';

var BuildRunStatusesEnum = enums.BuildRunStatusesEnum;

class BuildRunsController {
  constructor($scope, BuildRunsService) {
    this.$scope = $scope;

    this.$scope.getStatusClassLi = statusesHelper.getStatusClassLi;
    this.$scope.getStatusIconClass = statusesHelper.getStatusIconClass;
    this.$scope.getStepStatusIconClass = statusesHelper.getStepStatusIconClass;
    this.$scope.getStatusColorClass = statusesHelper.getStatusColorClass;

    let buildRuns = BuildRunsService.getBuildRuns();
    buildRuns.then(resp => {
      $scope.runs = resp.data.runs;
      _.forEach($scope.runs, r => r.isExpanded = false);
    });
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
