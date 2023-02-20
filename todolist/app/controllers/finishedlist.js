import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class FinishedlistController extends Controller {
    @service('tasks')tasks;
}
