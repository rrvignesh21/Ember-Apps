import { module, test } from 'qunit';

import { setupTest } from 'shoppingapp/tests/helpers';

module('Unit | Adapter | applicationimpo', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:applicationimpo');
    assert.ok(adapter);
  });
});
