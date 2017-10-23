const express = require('express');
const router = express.Router();

const users = require('./users');
const players = require('./players');
const teams = require('./teams');

// const USERS_COLLECTION = 'users';
// const PLAYERS_COLLECTION = 'users';

// module.exports.routes = (middleware) => {
//     userRoutes(middleware);
//     playerRoutes(middleware);
//     teamRoutes(middleware);
// }

// function userRoutes(middleware) {
    router.post('/users', users.createUser);    
    router.get('/users', users.readUsers);
    router.get('/users/:id', users.readUserById);
    router.put('/users/:id', users.updateUser);
    router.delete('/users/:id', users.deleteUser);    
// }

// function playerRoutes(middleware) {
    router.post('/players', players.createPlayer);
    router.get('/players', players.readPlayers);
    router.get('/players/:id', players.readPlayerById);
    router.put('/players/:id', players.updatePlayer);
    router.delete('/players/:id', players.deletePlayer);    
// }

// function teamRoutes(middleware) {
    router.post('/teams', teams.createTeam);
    router.get('/teams', teams.readTeams);
    router.get('/teams/:id', teams.readTeamById);
    router.put('/teams/:id', teams.updateTeam);
    router.delete('/teams/:id', teams.deleteTeam);    
// }

module.exports = router;