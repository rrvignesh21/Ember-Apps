import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ChatController extends Controller {
  @service('history') history;
}
