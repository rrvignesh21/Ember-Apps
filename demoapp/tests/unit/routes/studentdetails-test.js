import { module, test } from 'qunit';
import { setupTest } from 'demoapp/tests/helpers';

module('Unit | Route | studentdetails', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:studentdetails');
    assert.ok(route);
  });
});
