var friendsData = require("../data/friends");


module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    var total = 0;

    var match = {
      name: "",
      photo: "",
      difference: 1000
    };

    for (var i = 0; i < friendsData.length; i++) {
      console.log(friendsData[i].scores);
      total = 0;
      for (var j = 0; j < friendsData[i].scores.length; j++) {
        total += Math.abs(friendsData[i].scores[j] - newFriend.scores[j]);

        if (total <= match.difference) {
          match.name = friendsData[i].name;
          match.photo = friendsData[i].photo;
          match.difference = total;
        }
      }
    }
    friendsData.push(newFriend);
    res.json(match);
  });

  //just so I can clear table while testing
  app.get("/api/cleartables", function(req, res) {
    friendsData = [];
  });
};
