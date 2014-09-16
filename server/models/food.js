'use strict';

// var Mongo = require('mongodb');

function Food(){   // o, user){
}

Object.defineProperty(Food, 'collection', {
//  get: function(){return global.mongodb.collection('food');}
});

Food.create = function(){   // o, user, cb){
//  var b = new Food(o, user);
//  Food.collection.save(b, cb);
};

Food.all = function(){   // user, cb){
//  Food.collection.find({userId:user._id}).toArray(cb);
};

module.exports = Food;

