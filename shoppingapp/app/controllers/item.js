import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  @tracked colour = this.model.colors[0].color;

  @tracked isZoomed = false;

  get productImage() {
    console.log(this.colour);
    return this.model.colors.find(({ color }) => color === this.colour).image;
  }

  @action
  onChangeColor(newColor) {
    this.colour = newColor;
  }

  @action
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
