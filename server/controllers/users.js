'use strict';

var User     = require('../models/user'),
    Food     = require('../models/food'),
    Exercise = require('../models/exercise');

exports.register = function(req, res){
  User.register(req.body, function(err, user){
    if(user){
      res.status(200).end();
    }else{
      res.status(400).end();
    }
  });
};

exports.login = function(req, res){
  User.login(req.body, function(err, user){
    if(user){
      req.session.regenerate(function(){
        req.session.userId = user._id;
        req.session.save(function(){
          res.setHeader('X-Authenticated-User', user.email);
          res.status(200).end();
        });
      });
    }else{
      res.status(401).end();
    }
  });
};

exports.logout = function(req, res){
  req.session.destroy(function(){
    res.setHeader('X-Authenticated-User', 'anonymous');
    res.status(200).end();
  });
};

exports.show = function(req, res){
  User.findById(req.user._id, function(err, client){
    res.send({client:client});
  });
};

exports.update = function(req, res){
  User.findById(req.user._id, function(err, client){
    client.update(req.body, function(err, client){
      res.send({client:client});
    });
  });
};

exports.goals = function(req, res){
  req.user.updateGoals(req.body, function(err, client, c){
    console.log(err, client, c);
    res.send({goals:client.goals});
  });
};

exports.dashboard = function(req, res){
  Food.all(req.user._id, function(err, foods){
    Exercise.all(req.user._id, function(err, exercises){
      User.findById(req.user._id, function(err, client){
        res.send({client:client, foods:foods, exercises:exercises});
      });
    });
  });
};

exports.eat = function(req, res){
  Food.create(req.body, req.user, function(err, food){
    res.send({food:food});
  });
};

exports.foodLog = function(req, res){
  console.log('>>>>>>>>>>>>>>>>exports.foodLog');
  Food.all(req.user._id, function(err, foods){
    console.log('>>>>>>>>>>>>>>>>exports.foodLog - foods:', foods);
    res.send({foods:foods});
  });
};

exports.exercise = function(req, res){
  Exercise.create(req.body, req.user, function(err, exercise){
    res.send({exercise:exercise});
  });
};
