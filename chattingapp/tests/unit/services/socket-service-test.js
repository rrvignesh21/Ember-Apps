import { module, test } from 'qunit';
import { setupTest } from 'chattingapp/tests/helpers';

module('Unit | Service | SocketService', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:socket-service');
    assert.ok(service);
  });
});
