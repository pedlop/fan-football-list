const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const dataBase = require('../mongoDB');


function createPlayer(req, res) {
    let newPlayer = req.body;
    newPlayer.createDate = new Date();

    dataBase.connection((db) => {
        db.collection('players')
            .insertOne(newPlayer)
            .then((players) => {
                response.data = players;
                response.message = 'Player was added successfully!';
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            })
    });
}

function findPlayers(req, res) {
    dataBase.connection((db) => {
        db.collection('players')
            .find()
            .toArray()
            .then((players) => {
                response.data = players;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
}

/*  "/api/players/:id"
 *    GET: find player by id
 *    PUT: update player by id
 *    DELETE: deletes player by id
 */

function readPlayerById(req, res) {
    dataBase.connection((db) => {
        db.collection('players')
            .findOne({_id: new ObjectID(req.params.id)})
            .then((player) => {
                response.data = player;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
}

function updatePlayer(req, res) {
    let updatePlayer = req.body;
    delete updatePlayer._id;

    dataBase.connection((db) => {
        db.collection('players')
            .updateOne({_id: new ObjectID(req.params.id)}, updatePlayer)
            .then((player) => {
                response.data = player;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            })
    });
}

function deletePlayer(req, res) {
    dataBase.connection((db) => {
        db.collection('players')
            .deleteOne({_id: new ObjectID(req.params.id)})
            .then((result) => {
                response.data = result;
                response.message = 'Player was removed successfully!';
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            })
    });
}

// get player by position
// router.get('/players', (req, res) => {
//     let position = req.body;
//     dataBase.connection((db) => {
//         db.collection('players')
//             .find({'position': position})
//             .then((player) => {
//                 console.log(player);
//                 response.data = player;
//                 res.json(response);
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             })
//     });
// });

module.exports.createPlayer = createPlayer;
module.exports.findPlayers = findPlayers;
module.exports.readPlayerById = readPlayerById;
module.exports.updatePlayer = updatePlayer;
module.exports.deletePlayer = deletePlayer;