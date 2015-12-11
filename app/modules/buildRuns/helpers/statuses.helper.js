import enums from '../../../config/enums';

var BuildRunStatusesEnum = enums.BuildRunStatusesEnum;

function getStatusClassLi(statusCode) {
  switch (statusCode) {
    case BuildRunStatusesEnum.PENDING:
      return 'cci-li-status-pending';
    case BuildRunStatusesEnum.RUNNING:
      return 'cci-li-status-running';
    case BuildRunStatusesEnum.PASSED:
      return 'cci-li-status-passed';
    case BuildRunStatusesEnum.FAILED:
      return 'cci-li-status-failed';
  }
  return 'cci-li-status-default';
}

function getStatusIconClass(statusCode) {
  switch (statusCode) {
    case BuildRunStatusesEnum.PENDING:
      return 'fa-dot-circle-o';
    case BuildRunStatusesEnum.RUNNING:
      return 'fa-refresh';
    case BuildRunStatusesEnum.PASSED:
      return 'fa-check-circle-o';
    case BuildRunStatusesEnum.FAILED:
      return 'fa-times-circle-o';
  }
  return null;
}

function getStepStatusIconClass(statusCode) {
  switch (statusCode) {
    case BuildRunStatusesEnum.PENDING:
      return 'fa-dot-circle-o';
    case BuildRunStatusesEnum.RUNNING:
      return 'fa-refresh';
    case BuildRunStatusesEnum.PASSED:
      return 'fa-check-square';
    case BuildRunStatusesEnum.FAILED:
      return 'fa-times-circle';
    case BuildRunStatusesEnum.CANT_RUN:
      return 'fa-minus-circle';
  }
  return null;
}

function getStatusColorClass(statusCode) {
  switch (statusCode) {
    case BuildRunStatusesEnum.PENDING:
      return 'cci-status-pending';
    case BuildRunStatusesEnum.RUNNING:
      return 'cci-status-running';
    case BuildRunStatusesEnum.PASSED:
      return 'cci-status-passed';
    case BuildRunStatusesEnum.FAILED:
      return 'cci-status-failed';
    case BuildRunStatusesEnum.CANT_RUN:
      return 'cci-status-cant-run';
  }
  return 'cci-status-default';
}

function getBuildIconClass(statusCode) {
  switch (statusCode) {
    case BuildRunStatusesEnum.PENDING:
      return 'fa-folder-o';
    case BuildRunStatusesEnum.RUNNING:
      return 'fa-folder-o';
    case BuildRunStatusesEnum.PASSED:
      return 'fa-folder-o';
    case BuildRunStatusesEnum.FAILED:
      return 'fa-folder-o';
    case BuildRunStatusesEnum.CANT_RUN:
      return 'fa-folder-o';
  }
  return null;
}

export default {
  getStatusClassLi: getStatusClassLi,
  getStatusIconClass: getStatusIconClass,
  getStepStatusIconClass: getStepStatusIconClass,
  getStatusColorClass: getStatusColorClass,
  getBuildIconClass: getBuildIconClass,
};
