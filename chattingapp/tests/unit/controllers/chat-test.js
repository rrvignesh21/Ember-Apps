import { module, test } from 'qunit';
import { setupTest } from 'chattingapp/tests/helpers';

module('Unit | Controller | chat', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:chat');
    assert.ok(controller);
  });
});
