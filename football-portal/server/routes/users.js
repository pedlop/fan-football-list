const ObjectID = require('mongodb').ObjectID;

/*  "/api/users"
 *    POST: creates a new user
 *    GET: reads all user
 */

function createUser(req, res) {
    let newUser = req.body;
    newUser.createDate = new Date();

    dataBase.connection((db) => {
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
};

function readUsers(req, res) {
    dataBase.connection((db) => {
        db.collection('users')
            .read()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
}

/*  "/api/users/:id"
 *    GET: read user by id
 *    PUT: update user by id
 *    DELETE: deletes user by id
 */

function readUserById(req, res) {
    dataBase.connection((db) => {
        db.collection('users')
            .readOne({_id: new ObjectID(req.params.id)})
            .then((user) => {
                response.data = user;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
}

function updateUser(req, res) {
    let updateUser = req.body;
    delete updateUser._id;

    dataBase.connection((db) => {
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
}

function deleteUser(req, res) {
    dataBase.connection((db) => {
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
}

module.exports.createUser = createUser;
module.exports.readUsers = readUsers;
module.exports.readUserById = readUserById;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
