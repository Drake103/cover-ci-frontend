class BuildRunsController {
  constructor($scope, BuildRunsService) {
    let buildRuns = BuildRunsService.getBuildRuns();
    buildRuns.then(resp => $scope.runs = resp);
  }
}

BuildRunsController.$inject = ['$scope', 'BuildRunsService'];
export default BuildRunsController;
