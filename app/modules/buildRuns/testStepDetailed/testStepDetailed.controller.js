import enums from '../../../config/enums';
import statusesHelper from '../helpers/statuses.helper';

var BuildRunStatusesEnum = enums.BuildRunStatusesEnum;

class TestStepDetailedController {
  constructor($scope) {
    this.$scope = $scope;

    this.$scope.getStatusClassLi = statusesHelper.getStatusClassLi;
    this.$scope.getStatusIconClass = statusesHelper.getStatusIconClass;
    this.$scope.getStepStatusIconClass = statusesHelper.getStepStatusIconClass;
    this.$scope.getStatusColorClass = statusesHelper.getStatusColorClass;
  }
}

TestStepDetailedController.$inject = ['$scope'];
export default TestStepDetailedController;
