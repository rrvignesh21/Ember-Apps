import { module, test } from 'qunit';
import { setupTest } from 'todolist/tests/helpers';

module('Unit | Service | tasks', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:tasks');
    assert.ok(service);
  });
});
