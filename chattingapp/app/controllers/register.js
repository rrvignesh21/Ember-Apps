import Controller from '@ember/controller';
import { action } from '@ember/object';
import jquery from 'jquery';

export default class RegisterController extends Controller {
  @action
  submitForm() {
    console.log(jquery('#username').val());
    let username = jquery('#username').val();
    let password = jquery('#password').val();
    let confirmpassword = jquery('#confirm_password').val();
    let parameter = jquery('form').serialize();
    console.log(parameter);
    if (password.length < 8) {
      alert('Invalid Password!');
    } else {
      if (password === confirmpassword) {
        jquery.ajax({
          url: 'http://127.0.0.1:8080/server/RegisterUser',
          data: parameter,
          method: 'post',
          success: function (data) {
            console.log(data);
            if (data === 'true') {
              console.log(data);
              alert('Successfull !');
            } else {
              alert('Fail !');
            }
          },
          error: function (err) {
            alert('Error Occurs ' + err);
          },
        });
      } else {
        alert('Invalid Password!');
      }
    }
  }
}
