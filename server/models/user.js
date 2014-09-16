'use strict';

var bcrypt = require('bcrypt'),
    Mongo  = require('mongodb'),
    _      = require('underscore');

function User(){
}

Object.defineProperty(User, 'collection', {
  get: function(){return global.mongodb.collection('users');}
});

User.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  User.collection.findOne({_id:_id}, function(err, obj){
    var user = Object.create(User.prototype);
    user = _.extend(user, obj);
    cb(err, user);
  });
};

User.register = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(user || o.password.length < 3){return cb();}
    o.password = bcrypt.hashSync(o.password, 10);
    User.collection.save(o, cb);
  });
};

User.login = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(!user){return cb();}
    var isOk = bcrypt.compareSync(o.password, user.password);
    if(!isOk){return cb();}
    cb(null, user);
  });
};

User.prototype.update = function(o, cb){
  var properties    = Object.keys(o),
      self          = this;

  self.weights = self.weights || [];

  properties.forEach(function(property){
    switch(property){
      case 'height':
        if(o.height){self[property] = o[property] * 1;}
        break;
      case 'weight':
        self.weights.push({when:new Date(), wt:o[property] * 1});
        break;
      case 'age':
        if(o.age){self[property] = o[property] * 1;}
        break;
      default:
        if(o[property]){self[property] = o[property];}
    }
  });

  User.collection.save(this, function(){
    cb(null, self);
  });
};

User.prototype.updateGoals = function(o, cb){
  var properties = Object.keys(o),
      self       = this;

  self.goals = self.goals ||  {};

  properties.forEach(function(property){
    switch(property){
      default:
        if(o[property]){self.goals[property] = o[property];}
        break;
    }
  });

  User.collection.save(this, function(){
    cb(null, self);
  });
};

module.exports = User;

