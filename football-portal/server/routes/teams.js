const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const connection = require('../connection');
const response = require('../response');
const error = require('../error');

function createTeam(req, res) {
    let newTeam = req.body;
    newTeam.createDate = new Date();

    connection((db) => {
        db.collection('teams')
            .insertOne(newTeam)
            .then((teams) => {
                response.data = teams;
                res.json(response);
            })
            .catch((err) => {
                error.sendError(err, res);
            })
    });
}

function readTeams(req, res) {
    connection((db) => {
        db.collection('teams')
            .find()
            .toArray()
            .then((teams) => {
                response.data = teams;
                res.json(response);
            })
            .catch((err) => {
                error.sendError(err, res);
            })
    });
}

function readTeamById(req, res) {
    connection((db) => {
        db.collection('teams')
            .findOne({_id: new ObjectID(req.params.id)})
            .then((team) => {
                response.data = team;
                res.json(response);
            })
            .catch((err) => {
                error.sendError(err, res);
            })
    });
}

function updateTeam(req, res) {
    let updateTeam = req.body;
    delete updateTeam._id;

    connection((db) => {
        db.collection('teams')
            .updateOne({_id: new ObjectID(req.params.id)}, updateTeam)
            .then((team) => {
                response.data = team;
                res.json(response);
            })
            .catch((err) => {
                error.sendError(err, res);
            })
    });
}

function deleteTeam(req, res) {
connection((db) => {
    db.collection('teams')
        .deleteOne({_id: new ObjectID(req.params.id)})
        .then((result) => {
            response.data = result;
            res.json(response);
        })
        .catch((err) => {
            error.sendError(err, res);
        })
    });
}


module.exports.createTeam = createTeam;
module.exports.readTeams = readTeams;
module.exports.readTeamById = readTeamById;
module.exports.updateTeam = updateTeam;
module.exports.deleteTeam = deleteTeam;