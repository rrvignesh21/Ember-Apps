import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SessionService extends Service {
    @tracked isAuthenticate = false;

    @tracked userid = -1;
}
