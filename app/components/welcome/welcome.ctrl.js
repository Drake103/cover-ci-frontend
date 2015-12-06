class WelcomeCtrl {
  constructor($scope) {
    $scope.testVar = 'We are up and running from a required module!';
  }
}

WelcomeCtrl.$inject = ['$scope'];
export default WelcomeCtrl;
