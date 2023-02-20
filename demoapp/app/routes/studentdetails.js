import Route from '@ember/routing/route';

export default class StudentdetailsRoute extends Route {
  model() {
    return ['RajaVignesh', 'Hari', 'Vallarasan'];
  }
}
