import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import jquery from 'jquery';

export default class SendmessageService extends Service {
    @service('session') session;
    @service('socket') socket;
  
    @tracked messages = [];
  
    addmessage(message, id) {
      this.messages = [
        {
          message: message,
          from: this.session.userid,
          to: id,
          time: new Date().toLocaleTimeString(),
        },...this.messages
      ];
      // this.socket.onConnect(message);
      this.socket.sendMessage(message,id);
      // messages = jquery.ajax({
      //   url : "http://localhost:8080/server/GetMessage",
      //   method:"POST",
      //   data:{
      //     message : message,
      //     from : this.session.userid,
      //     to : id,
      //     time : new Date().toLocaleTimeString()
      //   },
      //   success:function(data){
      //     return JSON.parse(data);
      //   }
      // });
    }
}
