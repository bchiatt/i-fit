#!/bin/bash

if [ -z "$1" ] ; then
  echo "Enter a database name"
  exit 1
fi

mongoimport --jsonArray --drop --db $1 --collection users --file ./users.json
mongoimport --jsonArray --drop --db $1 --collection food --file ./food.json
mongoimport --jsonArray --drop --db $1 --collection exercise --file ./exercise.json
