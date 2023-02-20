import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ItemRoute extends Route {
  @service store;
  async model(param) {
    const { item_id } = param;
    const products = await this.store.findAll('product');
    const product = products.find(({ id }) => id === item_id);
    return product;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.colour = model.colors[0].color;
  }
}
