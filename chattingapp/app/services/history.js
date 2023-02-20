import Service from '@ember/service';
import jquery from 'jquery';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class HistoryService extends Service {

    @service('session') session;
    
    @service('socket') socket;

    @tracked chatHistory = [];

    async getHistory(){
        console.log("From : " + this.session.userid + "\nTo : " + this.socket.currentUser);
        let history =  jquery.ajax({
            url: 'http://localhost:8080/server/GetMessage',
            method: 'POST',
            data: {
              from: this.session.userid,
              to: this.socket.currentUser,
            },
            success: function (data) {
                console.log("Outer : " + data);
              if (data) {
                console.log(data);
                return JSON.parse(data);
            } else {
                return [{}];
              }
            },
            error: function (err) {
                alert("error Occur!" + err);
            },
          });
          console.log(" History "+await history);
          this.printMessage(await history);
    }

    printMessage(data){
        let parsedata = JSON.parse(data);
        console.log("Length : " + parsedata.length);
        for(let i = 0 ;i<parsedata.length;i++){
            console.log("Loop : " + parsedata[i].fromid + "->" + parsedata[i].toid);
            if (parsedata[i].fromid == this.socket.currentUser) {
                jquery('#chat-logs').append(
                "<div class='container darker'><p>" +
                parsedata[i].message +
                    "</p><span class='time-left'><b>" +
                    this.session.friendname + "-" + parsedata[i].time +
                    '</b></span></div>'
                );
            }
            else{
                jquery('#chat-logs').append(
                    "<div class='container'><p>" +
                    parsedata[i].message +
                    "</p><span class='time-right'><b>You - "+ parsedata[i].time +"</b></span></div>"
                );
            }
        }
    }
}
