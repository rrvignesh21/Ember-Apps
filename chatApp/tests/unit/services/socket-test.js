import { module, test } from 'qunit';
import { setupTest } from 'chat-app/tests/helpers';

module('Unit | Service | socket', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:socket');
    assert.ok(service);
  });
});
