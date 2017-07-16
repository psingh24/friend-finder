var friendsData = require("../data/friends");



module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friendsData.push(newFriend);
    });

    //just so I can clear table while testing
    app.get("/api/cleartables", function(req, res) {
        friendsData = [];
        
});
};