import { module, test } from 'qunit';
import { setupTest } from 'chattingapp/tests/helpers';

module('Unit | Service | history', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:history');
    assert.ok(service);
  });
});
