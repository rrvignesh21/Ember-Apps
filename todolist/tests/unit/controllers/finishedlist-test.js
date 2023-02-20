import { module, test } from 'qunit';
import { setupTest } from 'todolist/tests/helpers';

module('Unit | Controller | finishedlist', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:finishedlist');
    assert.ok(controller);
  });
});
