const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const local = 'mongodb://localhost:27017/football-portal';
const mLab = require('../../access-keys');
// const USERS_COLLECTION = 'users';
// const PLAYERS_COLLECTION = 'users';

// Connect
const connection = (closure) => {
    return MongoClient.connect(mLab._ordepdb.url, (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

/*  "/api/users"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.post('/users', (req, res) => {
    let newUser = req.body;
    newUser.createDate = new Date();

    connection((db) => {
        db.collection('users')
            .insertOne(newUser)
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            })
    });
});

/*  "/api/users/:id"
 *    GET: find user by id
 *    PUT: update user by id
 *    DELETE: deletes user by id
 */

router.get('/users/:id', (req, res) => {
    connection((db) => {
        db.collection('users')
            .findOne({_id: new ObjectID(req.params.id)})
            .then((user) => {
                response.data = user;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.put('/users/:id', (req, res) => {
    let updateUser = req.body;
    delete updateUser._id;

    connection((db) => {
        db.collection('users')
            .updateOne({_id: new ObjectID(req.params.id)}, updateUser)
            .then((user) => {
                response.data = user;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            })
    });
});

router.delete('/users/:id', (req, res) => {
    connection((db) => {
        db.collection('users')
            .deleteOne({_id: new ObjectID(req.params.id)})
            .then((result) => {
                response.data = result;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            })
    });
});

// PLAYERS API - TRANSFER TO ANOTHER FILE
router.get('/players', (req, res) => {
    connection((db) => {
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
});

router.post('/players', (req, res) => {
    let newPlayer = req.body;
    newPlayer.createDate = new Date();

    connection((db) => {
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
});

/*  "/api/players/:id"
 *    GET: find player by id
 *    PUT: update player by id
 *    DELETE: deletes player by id
 */

router.get('/players/:id', (req, res) => {
    connection((db) => {
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
});

router.put('/players/:id', (req, res) => {
    let updatePlayer = req.body;
    delete updatePlayer._id;

    connection((db) => {
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
});

router.delete('/players/:id', (req, res) => {
    connection((db) => {
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
});

module.exports = router;
