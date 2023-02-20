import Route from '@ember/routing/route';
import jquery from 'jquery';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class FinishedlistRoute extends Route {
  @service('tasks') taskService;

  @tracked tasks = this.taskService.finishedTask;
  async model() {
    let task = jquery.ajax({
      url: 'http://127.0.0.1:8080/server/GetFinishedTask',
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
    this.taskService.finishedTask = JSON.parse(await task);
    console.log('Finised : ' + this.taskService.finishedTask);
    return JSON.parse(await task);
  }
}
