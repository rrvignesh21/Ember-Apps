import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import jquery from 'jquery';
import { inject as service } from '@ember/service';

export default class ChatBoxComponent extends Component {
  @service('session') session;

  @service('sendmessage') send;

  @service('socket') socket;

  @service router;


  // @service('socket-io') socketIOService;

  @tracked query = '';

  // @tracked reiceivedMessage = this.socket.;
  @tracked messages = this.send.messages;
  @action
  sendMessage(id,name) {
    // this.init();
    console.log( "Name 1 send : " + name);
    console.log(this.session.userid + '--' + this.session.isAuthenticate);
    this.send.addmessage(this.query,id,name);
    this.messages = this.send.messages;
    console.log(this.messages);
    jquery("#chat-logs").append("<div class='container'><p>"+this.query+"</p><span class='time-right'><b>You "+"-" + new Date().toLocaleTimeString() +"</b></span></div>");;
    this.query = '';
  }
}
