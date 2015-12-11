import TestStepDetailedController from './testStepDetailed.controller';

class TestStepDetailed {
  constructor() {
    this.restrict = 'EA';
    this.templateUrl = '/modules/buildRuns/testStepDetailed/testStepDetailed.view.html';
    this.scope = {
      testStep: '=',
      testName: '@?',
    };
    this.controller = TestStepDetailedController;
  }

  static directiveFactory() {
    let instance = new TestStepDetailed();
    return instance;
  }
}

TestStepDetailed.directiveFactory.$inject = [];

export default TestStepDetailed;
