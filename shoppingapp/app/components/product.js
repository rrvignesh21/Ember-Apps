import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ProductComponent extends Component {
  productImage = this.args.product.colors[0].image;
}
