import BuildRunDetailedController from './buildRunDetailed.controller';

class BuildRunDetailed {
  constructor() {
    this.restrict = 'EA';
    this.templateUrl = '/modules/buildRuns/buildRunDetailed/BuildRunDetailed.view.html';
    this.scope = {
      buildRun: '=',
    };
    this.controller = BuildRunDetailedController;
  }

  static directiveFactory() {
    let instance = new BuildRunDetailed();
    return instance;
  }
}

BuildRunDetailed.directiveFactory.$inject = [];

export default BuildRunDetailed;
