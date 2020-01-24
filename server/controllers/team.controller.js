const Player = require('mongoose').model('Player');

module.exports = {
  index: function(request, response) {
    Player.find()
      .then(players => response.json(players))
      .catch(err=> response.json(err));
  },
  create: function(request, response) {
    Player.create(request.body)
      .then(player => response.json(player))
      .catch(err=> response.json(err));
  },
};