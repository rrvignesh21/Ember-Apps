import Controller from '@ember/controller';
import { action } from '@ember/object';
import jquery from 'jquery';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
    @service('session') session;

  @service('socket') socket;
  @service router;

  @action
  async submitForm() {
    console.log(jquery('#username').val());
    let username = jquery('#username').val();
    let password = jquery('#password').val();
    let parameter = jquery('form').serialize();
    console.log(parameter);
    let userid;
    let result = jquery.ajax({
      url: 'http://127.0.0.1:8080/server/LoginAuth',
      data: parameter,
      method: 'post',
      success: function (data) {
        console.log(data);
        if (parseInt(data) >= 0) {
          alert('Successfull !');
          userid = parseInt(data);
          return userid;
          // console.log(data);
        } else {
          alert('Fail !');
        }
      },
      error: function (err) {
        alert('Error Occurs ' + err);
      },
    });
    console.log('outer');
    if ((await result) >= 0) {
      // console.log('hello');
      // this.socket.init();
      this.session.isAuthenticate = true;
      this.session.userid = userid;
      this.socket.adduser(parseInt(userid));
      this.router.transitionTo('userlist');
    }
  }
}
