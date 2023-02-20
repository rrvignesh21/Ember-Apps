import Model, { attr } from '@ember-data/model';

export default class BooksModel extends Model {
  @attr title;
  @attr genre;
  @attr author;
  @attr status;
  @attr finished;
  @attr readdate;
  @attr finishdate;
}
