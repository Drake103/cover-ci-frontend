import BuildRunLiController from './buildRunLi.controller';

class BuildRunLi {
  constructor() {
    this.restrict = 'EA';
    this.templateUrl = '/modules/buildRuns/buildRunLi/buildRunLi.view.html';
    this.scope = {
      buildRun: '=',
    };
    this.controller = BuildRunLiController;
  }

  static directiveFactory() {
    let instance = new BuildRunLi();
    return instance;
  }
}

BuildRunLi.directiveFactory.$inject = [];

export default BuildRunLi;
