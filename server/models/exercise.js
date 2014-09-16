'use strict';

var Mongo = require('mongodb');

function Exercise(o, user){
  this._id        = new Mongo.userID();
  this.desc       = o.desc;
  this.when       = new Date(o.when);
  this.time       = o.time;
  this.intensity  = o.intensity;
  this.distance   = o.distance;
  this.notes      = o.notes;
  this.userId     = user._id;
  this.calsBurned = o.calsBurned;
}

Object.defineProperty(Exercise, 'collection', {
  get: function(){return global.mongodb.collection('exercise');}
});

Exercise.create = function(o, user, cb){
  getCalsBurned(o, user);
  var e = new Exercise(o, user);
  Exercise.collection.save(e, cb);
};

Exercise.all = function(userId, cb){
  Exercise.collection.find({userId:userId}).toArray(cb);
};

module.exports = Exercise;

// PRIVATE HELPER FUNCTIONS

function getCalsBurned(o, user){
  var bMod = bModCalc(currentWeight(user)),
      iMod = iModCalc(o.intensity),
      RUNNING_BURN  = 140,
      SWIMMING_BURN = 430,
      BIKING_BURN   = 50,
      WEIGHTS_BURN  = 300,
      SPORTS_BURN   = 350,
      YOGA_BURN     = 250;

  switch(o.type){
    case 'running':
      o.calsBurned = bMod * (o.distance * 1) * RUNNING_BURN;
      break;
    case 'swimming':
      o.calsBurned = bMod * (o.distance * 1) * SWIMMING_BURN;
      break;
    case 'biking':
      o.calsBurned = bMod * (o.distance * 1) * BIKING_BURN;
      break;
    case 'weights':
      o.calsBurned = bMod * (iMod * o.time) * WEIGHTS_BURN;
      break;
    case 'sports':
      o.calsBurned = bMod * (iMod * o.time) * SPORTS_BURN;
      break;
    case 'yoga':
      o.calsBurned = bMod * (iMod * o.time) * YOGA_BURN;
      break;
  }
}

function currentWeight(user){
  return user.weights[user.weights.length-1].wt;
}

function bModCalc(wt){
  if(wt < 150){
    return 0.75;
  }else if (wt < 200){
    return 1.0;
  }else if (wt < 250){
    return 1.25;
  }else{
    return 1.5;
  }
}

function iModCalc(intensity){
  var iMod;

  switch(intensity){
    case 'low':
      iMod = 0.75;
      break;
    case 'medium':
      iMod = 1.0;
      break;
    case 'high':
      iMod = 1.25;
      break;
  }

  return iMod;
}

