import Ember from 'ember';

export default Ember.Controller.extend({
  app: Ember.inject.controller('application'),
  data: Ember.inject.service('game-data'),

  // All missions
  missions: Ember.computed.alias('data.missions'),
  baseBadges: Ember.computed.alias('data.baseBadges'),

  model: Ember.computed('missions', 'baseBadges', function(){
    return {baseBadges: this.get('baseBadges'), missions: this.get('missions')};
  }),

  // Selected mission
  mission: null,
  missionBadges: Ember.computed('mission', function(){
    return this.get('mission.badges');
  }),

  totalBars: Ember.computed('baseBadges.@each.selectedReward',
    'missionBadges.@each.selectedReward', function(){
    let total = 0;
    this.get('baseBadges').forEach( b => {
      total += b.get('selectedReward.bars');
    });
    if(this.get('missionBadges')){
      this.get('missionBadges').forEach( b => {
        total += b.get('selectedReward.bars');
      });
    }
    return total;
  }),

  reset(){
    // Reset all badges in base badges to first reward
    this.get('baseBadges').forEach((badge) => {
      badge.set('selectedReward', badge.rewards[0]);
    });
  },

  init(){
    this.get('app').set('activeTool', 'Chest Simulator')
    this.reset();
  },

});
