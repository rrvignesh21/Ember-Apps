import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import jquery from 'jquery';
import { inject as service } from '@ember/service';

export default class UserlistController extends Controller {
  @service('socket') socket;
  @service('history')history;
  @service('session')session;
  @action
  setFriend(id,name) {
    console.log('Set : ' + id);
    this.socket.currentUser = id;
    this.session.friendname = name; 
    this.history.getHistory();
  }

  @action
  logout(){
    this.session.userid = -1;
    this.session.username = '';
    this.socket.currentUser = -1;
    this.session.isAuthenticate = false;
  }
}
