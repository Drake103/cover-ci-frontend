class BuildRunsService {
  constructor($q, $resource) {
    this.$q = $q;
    this.$resource = $resource;
  }

  getBuildRuns() {
    let resource = this.$resource('/data/buildRuns.json', {}, {
      get: {method:'GET', isArray:true},
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
