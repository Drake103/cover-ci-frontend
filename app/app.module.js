import angluar from 'angular';
import WelcomeCtrl from './components/welcome/welcome.ctrl';

var app = angular.module('myApp', []);
app.controller('WelcomeCtrl', ['$scope', WelcomeCtrl]);
