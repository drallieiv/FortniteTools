import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    gotoTool(tool) {
      this.transitionToRoute(tool);
    }
  }
});
