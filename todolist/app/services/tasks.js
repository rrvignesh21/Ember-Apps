import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TasksService extends Service {
  @tracked tasks = [];

  @tracked finishedTask = [];

  addTask(id,task) {
    this.tasks = [
      ...this.tasks,
      {
        id : id,
        task: task,
        status: true,
      },
    ];
  }

  finishTask(task) {
    let index = this.tasks.indexOf(task);
    console.log(index);
    this.finishedTask.push(this.tasks.splice(index, 1));
    console.log(this.finishedTask);
  }
}
