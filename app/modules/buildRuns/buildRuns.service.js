import _ from 'lodash';

class BuildRunsService {
  constructor($q, $resource) {
    this.$q = $q;
    this.$resource = $resource;
  }

  _parseResponseDates(response) {
    let runs = response.data.runs;
    _.forEach(runs, r => r.timeStarted = new Date(r.timeStarted * 1000));

    return response;
  }

  getBuildRuns() {
    let resource = this.$resource('/data/buildRuns.json', {}, {
      get: {
        method:'GET',
        interceptor: {response: this._parseResponseDates},
      },
    });
    return resource.get().$promise;
  }

  static createInstance($q, $resource) {
    BuildRunsService.instance = new BuildRunsService($q, $resource);
    return BuildRunsService.instance;
  }
}

BuildRunsService.createInstance.$inject = ['$q', '$resource'];

export default BuildRunsService;
