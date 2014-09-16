'use strict';

var Mongo = require('mongodb');

function Food(o, user){
  this._id    = new Mongo.userID();
  this.name   = o.name;
  this.type   = o.type;
  this.cals   = o.cals;
  this.when   = new Date(o.when);
  this.userId = user._id;
}

Object.defineProperty(Food, 'collection', {
  get: function(){return global.mongodb.collection('food');}
});

Food.create = function(o, user, cb){
  var f = new Food(o, user);
  Food.collection.save(f, cb);
};

Food.all = function(user, cb){
  Food.collection.find({userId:user._id}).toArray(cb);
};

module.exports = Food;

