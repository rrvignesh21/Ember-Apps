import EmberRouter from '@ember/routing/router';
import config from 'chattingapp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('chat', { path: 'chat/:user_id' });
  this.route('register');
  this.route('login');
  this.route('userlist');
});
