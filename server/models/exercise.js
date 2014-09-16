'use strict';

// var Mongo = require('mongodb');

function Exercise(){   // o, user){
}

Object.defineProperty(Exercise, 'collection', {
//  get: function(){return global.mongodb.collection('exercise');}
});

Exercise.create = function(){   // o, user, cb){
//  var b = new Exercise(o, user);
//  Exercise.collection.save(b, cb);
};

Exercise.all = function(){   // user, cb){
//  Exercise.collection.find({userId:user._id}).toArray(cb);
};

module.exports = Exercise;

