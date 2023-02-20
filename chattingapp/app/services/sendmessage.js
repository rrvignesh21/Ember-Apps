import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import jquery from 'jquery';

export default class SendmessageService extends Service {
  @service('session') session;
  @service('socket') socket;

  @tracked messages = [];

  addmessage(message, id, name) {
    this.messages = [
      {
        message: message,
        from: this.session.userid,
        to: id,
        time: new Date().toLocaleTimeString(),
      },
      ...this.messages,
    ];
    this.socket.sendMessage(message, id, name);
    jquery.ajax({
      url: 'http://localhost:8080/server/SendMessage',
      method: 'POST',
      data: {
        message: message,
        from: this.session.userid,
        to: id,
        time: new Date().toLocaleTimeString(),
        fromname : this.session.username,
        toname : this.session.friendname
      },
      success: function (data) {
        if (data === 'true') {
        } else {
        }
      },
      error: function (err) {},
    });
  }
}
