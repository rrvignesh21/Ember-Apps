import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import jquery from 'jquery';

export default class UserlistRoute extends Route {
  @service('session') session;

  async model() {
    let Users = jquery.ajax({
      url: 'http://127.0.0.1:8080/server/GetUserList',
      method: 'post',
      success: function (data) {
        console.log(data);
        if (data) {
          return JSON.parse(data);
        } else {
          alert('Fail !');
        }
      },
      error: function (err) {
        alert('Error Occurs ' + err);
      },
    });
    console.log('TYPE : ' + typeof Users);
    return JSON.parse(await Users);
  }

  listUser() {
    let result = [];
    for (i = 0; i < this.model.length; i++) {
      if (this.model[i].id !== this.session.userid) {
        result = [...result, this.model[i]];
      }
    }
    return result;
  }
}
