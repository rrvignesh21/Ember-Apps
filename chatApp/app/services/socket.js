import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SocketService extends Service {
    
@service('socket-io') socketIOService;

  @service('session')session;

  @tracked receivedMessage = [];

  socket = this.socketIOService.socketFor(`http://localhost:3000/`);
  init(){
    super.init(...arguments);
    console.log('hello');
    const socket = this.socketIOService.socketFor(`http://localhost:3000/`)


    console.log(socket);
    socket.on('receive', this.onMessage, this);
    // socket.on('myCustomEvent', () => {
    //   socket.emit('anotherCustomEvent', 'some data');
    // });
  }

  adduser(id){
    this.socket.emit('new-user',id); 
  }

  sendMessage(message,id) {
//     $('#message-area').append("<div class=\"message-box my-message-box\" id=\"message-box\">"+
//     "<div class=\"message my-message\">"+this.name +" : "+this.query+"</div>"+
//     "<div class=\"separator\"></div></div>");
      this.socket.emit('sent',{message : message,to:id});
//     this.query = '';
  }

  // onConnect(message) {
  //   console.log("Message reached.1");
  //   // this.socket = this.socketIOService.socketFor(`http://localhost:3000/`);
  //   this.socket.send(message);
  // }

  onMessage(data){
    console.log(data);
    this.receivedMessage = [...this.receivedMessage, data];   
    return this.receivedMessage; 
  }

  // myCustomEvent(data) {
  //   // const socket = this.socketIOService.socketFor(`http://localhost:3000/`);
  //   this.socket.emit('anotherCustomEvent', 'some data');
  // }

  willDestroyElement() {
    // const socket = this.socketIOService.socketFor(`http://localhost:3000/`);
    this.socket.off('connect', this.onConnect);
    this.socket.off('message', this.onMessage);
    this.socket.off('myCustomEvent', this.myCustomEvent);
  }
}
