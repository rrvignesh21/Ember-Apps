import Route from '@ember/routing/route';
import jquery from 'jquery';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service('tasks') taskService;

  @tracked tasks = [];
  async model() {
    let tasks = jquery.ajax({
      url: 'http://127.0.0.1:8080/server/GetTask',
      method: 'post',
      success: function (data) {
        if (data) {
          console.log('Data : ' + data);
          return JSON.parse(data);
        } else {
          alert('Fail!');
        }
      },
      error: function (err) {
        alert('Error Occurs' + err);
      },
    });
    this.taskService.tasks = JSON.parse(await tasks);
    return JSON.parse(await tasks);
  }
}
