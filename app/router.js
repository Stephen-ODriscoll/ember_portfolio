import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home');
  this.route('about');
  this.route('contact');
  this.route('service');
  this.route('caseStudy');
  this.route('siteMap');
});
