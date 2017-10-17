import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    selectReward(reward) {
      this.set('selectedReward', reward);
    }
  }
});
