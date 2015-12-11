import enums from '../../../config/enums';
import statusesHelper from '../helpers/statuses.helper';

var BuildRunStatusesEnum = enums.BuildRunStatusesEnum;

class BuildRunDetailedController {
  constructor($scope) {
    this.$scope = $scope;

    this.$scope.getStatusClassLi = statusesHelper.getStatusClassLi;
    this.$scope.getStatusIconClass = statusesHelper.getStatusIconClass;
    this.$scope.getStepStatusIconClass = statusesHelper.getStepStatusIconClass;
    this.$scope.getStatusColorClass = statusesHelper.getStatusColorClass;
    this.$scope.getBuildIconClass = statusesHelper.getBuildIconClass;
  }
}

BuildRunDetailedController.$inject = ['$scope'];
export default BuildRunDetailedController;
