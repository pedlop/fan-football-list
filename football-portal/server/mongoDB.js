const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const local = 'mongodb://localhost:27017/football-portal';
const mLab = require('../access-keys');

// Connect
module.exports.connection =  (closure) => {
    return MongoClient.connect(mLab._ordepdb.url, (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

