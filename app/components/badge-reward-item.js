import Ember from 'ember';

export default Ember.Component.extend({

  rewardClass: Ember.computed('reward', 'selectedReward', function(){
    let style =  'reward reward-' + this.get('reward.level.key');;
    if(this.get('reward') === this.get('selectedReward')){
      style += ' reward-selected';
    }
    return style;
  }),

  actions: {
    selectReward(reward) {
      this.get('selectReward')(reward);
    }
  }
});
