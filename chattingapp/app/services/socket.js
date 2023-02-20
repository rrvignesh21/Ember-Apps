import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import jquery from 'jquery';

export default class SocketService extends Service {
  @service('socket-io') socketIOService;

  @service('session') session;

  @tracked receivedMessage = [];

  @tracked currentUser;
  socket = this.socketIOService.socketFor(`http://localhost:3000/`);
  init() {
    super.init(...arguments);
    console.log('hello');
    const socket = this.socketIOService.socketFor(`http://localhost:3000/`);
    console.log(socket);
    socket.on('receive', this.onMessage, this);
  }

  setCurrentUser(id) {
    this.currentUser = id;
  }

  adduser(id) {
    this.socket.emit('new-user', id);
  }

  sendMessage(message, id, toname) {
    console.log('To name : ' + toname);
    this.socket.emit('sent', {
      message: message,
      to: id,
      from: this.session.userid,
      name: toname,
      time:new Date().toLocaleTimeString()
    });
  }

  onMessage(data) {
    console.log(data);
    console.log('Current User : ' + this.currentUser);
    if (data.from == this.currentUser) {
      jquery('#chat-logs').append(
        "<div class='container darker'><p>" +
          data.message +
          "</p><span class='time-left'><b>" +
          data.name + "-" + data.time +
          '</b></span></div>'
      );
    }
  }
}
