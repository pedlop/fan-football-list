const express = require('express');
const users = require('./users');
const players = require('./players');
// const router = express.Router();

// const USERS_COLLECTION = 'users';
// const PLAYERS_COLLECTION = 'users';

module.exports.routes = (middleware) => {
    userRoutes(middleware);
    playerRoutes(middleware);
}

function userRoutes(middleware) {
    middleware.post('/users', users.createUser);    
    middleware.get('/users', users.readUsers);
    middleware.get('/users/:id', users.readUserById);
    middleware.put('/users/:id', users.updateUser);
    middleware.delete('/users/:id', users.deleteUser);    
}

function playerRoutes(middleware) {
    middleware.post('/players', players.createPlayer);
    middleware.get('/players', players.readPlayers);
    middleware.get('/players/:id', players.readPlayerById);
    middleware.put('/players/:id', players.updatePlayer);
    middleware.delete('/players/:id', players.deletePlayer);    
}
