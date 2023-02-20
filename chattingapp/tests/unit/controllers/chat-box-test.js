import { module, test } from 'qunit';
import { setupTest } from 'chattingapp/tests/helpers';

module('Unit | Controller | chat-box', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:chat-box');
    assert.ok(controller);
  });
});
