import EmberObject from '@ember/object';
import StyledMixin from 'ui-components/mixins/styled';
import { module, test } from 'qunit';

module('Unit | Mixin | styled', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let StyledObject = EmberObject.extend(StyledMixin);
    let subject = StyledObject.create();
    assert.ok(subject);
  });
});
