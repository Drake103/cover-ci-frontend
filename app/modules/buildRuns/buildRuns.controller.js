import _ from 'lodash';

class BuildRunsController {
  constructor($scope, BuildRunsService) {
    this.$scope = $scope;

    let buildRuns = BuildRunsService.getBuildRuns();
    buildRuns.then(resp => {
      $scope.runs = resp.data.runs;
      _.forEach($scope.runs, r => r.isExpanded = false);
    });
  }

  getStatusClass(buildRun) {
    return 'cci-status-failed';
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
