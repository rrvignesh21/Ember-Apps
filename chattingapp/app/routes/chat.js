import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import jquery from 'jquery';

export default class ChatRoute extends Route {
  @service('socket') socket;
}