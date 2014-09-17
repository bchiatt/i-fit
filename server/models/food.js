'use strict';

var Mongo = require('mongodb');

function Food(o, user){
  this.name   = o.name;
  this.type   = o.type;
  this.cals   = parseInt(o.calories);
  this.when   = new Date(o.date);
  this.userId = Mongo.ObjectID(user._id);
}

Object.defineProperty(Food, 'collection', {
  get: function(){return global.mongodb.collection('food');}
});

Food.create = function(o, user, cb){
  var f = new Food(o, user);
  Food.collection.save(f, cb);
};

Food.all = function(userId, cb){
  Food.collection.find({userId:userId}).toArray(cb);
};

module.exports = Food;

