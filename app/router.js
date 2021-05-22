import EmberRouter from '@ember/routing/router';
import config from 'embroider-resolution-reproduction-issue-817/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
