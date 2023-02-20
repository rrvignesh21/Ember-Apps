import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import jquery from 'jquery';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service('tasks') tasks;

  @tracked query = '';

  @tracked currenttasks = this.tasks.tasks;

  @action
  async addTask() {

    let id = jquery.ajax({
      url: 'http://127.0.0.1:8080/server/AddTask',
      method: 'post',
      data: {
        task: jquery('#task').val(),
      },
      success: function (data) {
        console.log("Outer : " + data);
        if (data) {
          console.log("Added : " + data);
          return parseInt(data);
        } else {
        }
      },
      error: function (err) {
        alert('Error Occurs!');
      },
    });
    this.tasks.addTask(await id,this.query);
    this.currenttasks = this.tasks.tasks;
    this.query = '';
  }

  @action
  finishTask(task) {
    console.log("Task : " + task.id + "-" + task.task);
    jquery.ajax({
      url: 'http://127.0.0.1:8080/server/FinishTask',
      method: 'post',
      data: {
        id: task.id,
      },
      success: function (data) {
        if (data === 'true') {
          console.log("True");
        } else {
          console.log("False" + data);
        }
      },
      error: function (err) {
        alert('Error Occurs!');
      },
    });
    this.tasks.finishTask(task);
    this.currenttasks = this.tasks.tasks;
  }
}
