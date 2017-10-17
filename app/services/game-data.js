import Ember from 'ember';
import EmberObject from '@ember/object';

const Mission = EmberObject.extend({
  key: '',   // ID of the mission
  name: '',  // "Translated" name
  tips: '',  // Some notes about that mission
});

const Badge = EmberObject.extend({
  key: '',    // ID of the badge
  name: '',   // "Translated" name of the badge
  rewards: [], // List of badge levels : Level + Bars
  addLevel(level, bars) {
    this.get('rewards').push({level: level, bars: bars});
    return this;
  },
});

const Level  = EmberObject.extend({
  key: '',   // ID of the level
  name: '',  // "Translated" name of the level
})

export default Ember.Service.extend({

  levels: [
    Level.create({key: 'none', name: 'Failed'}),
    Level.create({key: 'BRONZE', name: 'Bronze'}),
    Level.create({key: 'SILVER', name: 'Silver'}),
    Level.create({key: 'GOLD', name: 'Gold'}),
    Level.create({key: 'PLATINIUM', name: 'Platinium'}),
  ],

  init(){
    let missions = [];

    let lts = Mission.create({key: 'LIGHT', name: 'Ride the Lightning'});
    lts.set('tips', '<Some notes about Ride the lighning>')
    missions.push(lts);

    let storm = Mission.create({key: 'STORM', name: 'Fight the Storm'});
    storm.set('tips', '<Some notes about Fight the Storm>')
    missions.push(storm);

    let data = Mission.create({key: 'DATA', name: 'Retrieve the Data'});
    missions.push(data);

    let surv = Mission.create({key: 'SURV', name: 'Rescue the Survivors'});
    missions.push(surv);

    let camps = Mission.create({key: 'CAMPS', name: 'Destroy the Encampments'});
    missions.push(camps);

    let repair = Mission.create({key: 'REPAIR', name: 'Repair the Shelter'});
    missions.push(repair);

    let bomb = Mission.create({key: 'BOMB', name: 'Deliver the Bomb'});
    missions.push(bomb);

    let radar = Mission.create({key: 'RADAR', name: 'Build the Radar Grid'});
    missions.push(radar);

    let evac = Mission.create({key: 'EVAC', name: 'Evacuate the Shelter'});
    missions.push(evac);

    let rocket = Mission.create({key: 'ROCKET', name: 'Launch the Rocket'});
    missions.push(rocket);

    this.set('missions', missions);

    // levels
    let level = {
        none: this.get('levels')[0],
        bronze: this.get('levels')[1],
        silver: this.get('levels')[2],
        gold: this.get('levels')[3],
        platinium: this.get('levels')[4],
    };

    this.set('level', level);

    // All badges have a none option
    Badge.reopen({
      init(){
        this.set('rewards',[{level: level.none, bars: 0}]);
      }
    });

    // Create the list of base badges
    let baseBadges = [];

    baseBadges.push(
      Badge.create({key: 'EXPLO', name: 'Exploration'})
      .addLevel(level.platinium, 6),

      Badge.create({key: 'COMBAT', name: 'Combat'})
      .addLevel(level.gold, 2)
      .addLevel(level.platinium, 2),

      Badge.create({key: 'BUILDING', name: 'Building'})
      .addLevel(level.gold, 2)
      .addLevel(level.platinium, 2),

      Badge.create({key: 'UTILITY', name: 'Utility'})
      .addLevel(level.gold, 2)
      .addLevel(level.platinium, 2),

      Badge.create({key: 'BUILD', name: 'Under build limit'})
      .addLevel(level.gold, 6),

      Badge.create({key: 'SPEED2', name: 'Speed Run : 2 days'})
      .addLevel(level.bronze, 6),

      Badge.create({key: 'SPEED3', name: 'Speed Run : 3 days'})
      .addLevel(level.silver, 6),

      Badge.create({key: 'SPEED4', name: 'Speed Run : 4 days'})
      .addLevel(level.gold, 6),

      Badge.create({key: 'SPEED5', name: 'Speed Run : 5 days'})
      .addLevel(level.gold, 6),

      Badge.create({key: 'GROUP', name: 'Group Activity'})
      .addLevel(level.gold, 4),

      Badge.create({key: 'DRONE', name: 'Drone Crash'})
      .addLevel(level.silver, 4),

      Badge.create({key: 'FAILED', name: 'Mission Failed'})
      .addLevel(level.gold, 6),
    );

    /*
    baseBadges.push(
      Badge.create({key: 'FAILED', name: 'Mission Failed'})
      .addLevel(level.gold, 6)
    );
    */

    this.set('baseBadges', baseBadges);
  },

});
