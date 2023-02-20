import { module, test } from 'qunit';
import { setupTest } from 'chat-app/tests/helpers';

module('Unit | Route | chat', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:chat');
    assert.ok(route);
  });
});
