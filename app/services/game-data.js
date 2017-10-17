import Ember from 'ember';
import EmberObject from '@ember/object';

const Mission = EmberObject.extend({
  key: '',   // ID of the mission
  name: '',  // "Translated" name
  tips: '',  // Some notes about that mission
  badges: null, // list of badges possible

  init(){
    this.set('badges', []);
  }
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
        this.set('selectedReward', this.get('rewards')[0]);
      }
    });

    let missions = [];

    let lightning = Mission.create({key: 'LIGHT', name: 'Ride the Lightning'});
    lightning.set('tips', '<Some notes about Ride the lighning>')
    lightning.get('badges').push(
      Badge.create({key: 'VAN.ONE', name: 'Van Stage 1'})
      .addLevel(level.bronze, 2),
      Badge.create({key: 'VAN.TWO', name: 'Van Stage 2'})
      .addLevel(level.silver, 4),
      Badge.create({key: 'VAN.DONE', name: 'Van Launched!'})
      .addLevel(level.platinium, 16),
    );
    missions.push(lightning);

    let storm = Mission.create({key: 'STORM', name: 'Fight the Storm'});
    storm.set('tips', '<Some notes about Fight the Storm>')
    storm.get('badges').push(
      Badge.create({key: 'ATLAS.QUICK', name: 'Placed Atlas quickly'})
      .addLevel(level.silver, 4),
      Badge.create({key: 'ATLAS.FIRST', name: 'Successful on 1st attempt'})
      .addLevel(level.silver, 4),
      Badge.create({key: 'ATLAS.HEALTH', name: 'Each Atlas over 50% health'})
      .addLevel(level.silver, 4),
      Badge.create({key: 'ATLAS.ONE', name: 'Fight the Storm'})
      .addLevel(level.gold, 16),
      Badge.create({key: 'ATLAS.TWO', name: 'Double Down'})
      .addLevel(level.gold, 24),
      Badge.create({key: 'ATLAS.THREE', name: 'Triple Tap'})
      .addLevel(level.gold, 30),
      Badge.create({key: 'ATLAS.FOUR', name: 'Four Score'})
      .addLevel(level.gold, 34),
    );
    missions.push(storm);

    let data = Mission.create({key: 'DATA', name: 'Retrieve the Data'});
    data.get('badges').push(
      Badge.create({key: 'DATA.LOC', name: 'Located the Landing Zone'})
      .addLevel(level.silver, 4),
      Badge.create({key: 'DATA.PROGRESS1', name: '25% Successful Download'})
      .addLevel(level.bronze, 12),
      Badge.create({key: 'DATA.PROGRESS2', name: '50% Successful Download'})
      .addLevel(level.silver, 14),
      Badge.create({key: 'DATA.PROGRESS3', name: '75% Successful Download'})
      .addLevel(level.gold, 16),
      Badge.create({key: 'DATA.PROGRESS4', name: '100% Successful Download'})
      .addLevel(level.platinium, 18),
    );
    missions.push(data);

    let surv = Mission.create({key: 'SURV', name: 'Rescue the Survivors'});
    surv.get('badges').push(
      Badge.create({key: 'SURVIVOR.MIN', name: 'Rescue Rookie (1)'})
      .addLevel(level.bronze, 8),
      Badge.create({key: 'SURVIVOR.LOW', name: 'Life Preserver (4)'})
      .addLevel(level.silver, 10),
      Badge.create({key: 'SURVIVOR.GOOD', name: 'Humanitarian (7)'})
      .addLevel(level.gold, 12),
      Badge.create({key: 'SURVIVOR.HIGH', name: 'Evacuation Expert (9)'})
      .addLevel(level.platinum, 20),
      Badge.create({key: 'SURVIVOR.ALL', name: 'All survivors rescued'})
      .addLevel(level.platinium, 8),
    );
    missions.push(surv);

    let camps = Mission.create({key: 'CAMPS', name: 'Destroy the Encampments'});
    camps.get('badges').push(
      Badge.create({key: 'CAMPS.MIN', name: 'Camp Crasher (1)'})
      .addLevel(level.bronze, 14),
      Badge.create({key: 'CAMPS.LOW', name: 'Husk Shucker (2)'})
      .addLevel(level.silver, 16),
      Badge.create({key: 'CAMPS.GOOD', name: 'Encampment Executioner (3)'})
      .addLevel(level.gold, 18),
      Badge.create({key: 'CAMPS.HIGH', name: 'Annihilator (4)'})
      .addLevel(level.platinum, 20),
      Badge.create({key: 'CAMPS.ALL', name: 'All encampments destroyed'})
      .addLevel(level.platinium, 14),
    );
    missions.push(camps);

    let repair = Mission.create({key: 'REPAIR', name: 'Repair the Shelter'});
    repair.get('badges').push(
      Badge.create({key: 'REPAIR.DONE', name: 'Shelter successfully repaired'})
      .addLevel(level.bronze, 22),
    );
    missions.push(repair);

    let bomb = Mission.create({key: 'BOMB', name: 'Deliver the Bomb'});
    bomb.set('tips', 'Max chest seems to be capped lvl 6');
    bomb.get('badges').push(
      Badge.create({key: 'BOMB.LOC', name: 'Located the Rift'})
      .addLevel(level.bronze, 2),
      Badge.create({key: 'BOMB.DONE', name: 'Rift Closed!'})
      .addLevel(level.gold, 24),
      Badge.create({key: 'BOMB.HEALT', name: 'Launcher with over 50% health'})
      .addLevel(level.silver, 6),
    );
    missions.push(bomb);

    let radar = Mission.create({key: 'RADAR', name: 'Build the Radar Grid'});
    radar.set('tips', 'Max chest seems to be capped lvl 5');
    radar.get('badges').push(
      Badge.create({key: 'RADAR.MIN', name: 'Radar Grid Online!'})
      .addLevel(level.platinium, 14),
      Badge.create({key: 'RADAR.GOOD', name: 'Storm Forecasters'})
      .addLevel(level.gold, 18),
      Badge.create({key: 'RADAR.MAX', name: 'Maximum Coverage'})
      .addLevel(level.platinium, 22),
    );
    missions.push(radar);

    let evac = Mission.create({key: 'EVAC', name: 'Evacuate the Shelter'});
    evac.get('badges').push(
      Badge.create({key: 'EVAC.DONE', name: 'Shelter successfully evacuated'})
      .addLevel(level.gold, 22),
      Badge.create({key: 'EVAC.HEALTH', name: 'Shelter with over 50% health'})
      .addLevel(level.silver, 4),
    );
    missions.push(evac);

    let rocket = Mission.create({key: 'ROCKET', name: 'Launch the Rocket'});
    rocket.get('badges').push(
      Badge.create({key: 'ROCKET.FIRST', name: 'Rocket Stage 1'})
      .addLevel(level.bronze, 2),
      Badge.create({key: 'ROCKET.SECOND', name: 'Rocket Stage 2'})
      .addLevel(level.silver, 4),
      Badge.create({key: 'ROCKET.LAST', name: 'Rocket Final Stage'})
      .addLevel(level.gold, 6),
      Badge.create({key: 'ROCKET.LAUNCHED', name: 'Rocket Launched'})
      .addLevel(level.platinium, 28),
    );
    missions.push(rocket);

    this.set('missions', missions);


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
