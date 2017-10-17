import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('badge-level-selector', 'Integration | Component | badge level selector', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{badge-level-selector}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#badge-level-selector}}
      template block text
    {{/badge-level-selector}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
