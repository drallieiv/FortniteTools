import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('badge-reward-result', 'Integration | Component | badge reward result', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{badge-reward-result}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#badge-reward-result}}
      template block text
    {{/badge-reward-result}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
