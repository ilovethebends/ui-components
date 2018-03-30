import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui-breadcrumbs-menu-trigger', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{ui-breadcrumbs-menu-trigger}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#ui-breadcrumbs-menu-trigger}}
        template block text
      {{/ui-breadcrumbs-menu-trigger}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
