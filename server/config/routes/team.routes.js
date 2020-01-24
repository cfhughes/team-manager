const teamController = require('../../controllers/team.controller');
const router = require('express').Router();

module.exports = router
    .get('/', teamController.index)
    .post('/', teamController.create);