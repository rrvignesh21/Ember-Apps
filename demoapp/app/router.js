import EmberRouter from '@ember/routing/router';
import config from 'demoapp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('studentdetails');
  this.route('about');
  this.route('contact', { path: '/contact-me' });
  this.route('rental', { path: '/rentals/:rental_id' });
});
