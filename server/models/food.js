'use strict';

var Mongo = require('mongodb');

function Food(o, user){
  console.log('>>>>>>>>>>>>Food constructor; o: ', o);
  console.log('>>>>>>>>>>>>Food constructor; user: ', user);
  this._id    = new Mongo.ObjectID();
  this.name   = o.name;
  this.type   = o.type;
  this.cals   = parseInt(o.cals);
  this.when   = new Date(o.when);
  this.userId = user;
}

Object.defineProperty(Food, 'collection', {
  get: function(){return global.mongodb.collection('food');}
});

Food.create = function(o, user, cb){
  var f = new Food(o, user);
  Food.collection.save(f, cb);
};

Food.all = function(user, cb){
  console.log('>>>>>>>>>>>>>>>>>Food.all; user: ', user);
  Food.collection.find({userId:user._id}).toArray(cb);
};

module.exports = Food;

