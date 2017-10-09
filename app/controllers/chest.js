import Ember from 'ember';

export default Ember.Controller.extend({
  app: Ember.inject.controller('application'),

  init(){
    this.get('app').set('activeTool', 'Chest Simulator')
  },

});
