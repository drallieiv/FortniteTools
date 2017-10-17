import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('badge-reward-item', 'Integration | Component | badge reward item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{badge-reward-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#badge-reward-item}}
      template block text
    {{/badge-reward-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
