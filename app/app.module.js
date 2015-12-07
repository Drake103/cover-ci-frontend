import angluar from 'angular';
import BuildRunsModule from './modules/buildRuns/buildRuns.module';
import Navbar from './shared/navbar/navbar.directive';
import Footer from './shared/footer/footer.directive';
import ngRoute from 'angular-route';

var app = angular.module('cci', [BuildRunsModule]);

app.directive('cciNavbar', Navbar.directiveFactory);
app.directive('cciFooter', Footer.directiveFactory);

export default app;
