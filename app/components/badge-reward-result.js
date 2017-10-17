import Ember from 'ember';

export default Ember.Component.extend({

  chestLevel: Ember.computed('bars', function(){
    let bars = this.get('bars');
    return 1 + Math.floor(bars/10);
  }),

  chestProgress: Ember.computed('bars', function(){
    let remaining = this.get('bars') % 10;
    return `${remaining}/10`;
  }),
});
