import { module, test } from 'qunit';
import { setupTest } from 'chat-app/tests/helpers';

module('Unit | Route | userlist', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:userlist');
    assert.ok(route);
  });
});
