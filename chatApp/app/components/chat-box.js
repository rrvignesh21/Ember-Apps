import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ChatBoxComponent extends Component {
    @service('session') session;

    @service('sendmessage') send;
  
    @service('socket') socket;
  
  
    // @service('socket-io') socketIOService;
  
    @tracked query = '';
  
    // @tracked reiceivedMessage = this.socket.;
    @tracked messages = this.send.messages;
    @action
    sendMessage(id) {
      // this.init();
      console.log(this.session.userid + '--' + this.session.isAuthenticate);
      this.send.addmessage(this.query,id);
      this.messages = this.send.messages;
      console.log(this.messages);
    }
}
