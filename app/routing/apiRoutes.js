var friendsData = require("../data/friends");

// console.log(friendsData)

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
       
    // console.log("hello")
   

    var total = [];


        for (var i=0; i< friendsData.length; i++) {
           for (var j=0; j<friendsData[i].scores.length; j++) {
               total.push(Math.abs(friendsData[i].scores[j] - newFriend.scores[j]))
           }
           
          
        }
        // var match = {
        //     name: friendsData[0].name,
        //     photo: friendsData[0].photo
        // }
        
        // console.log(match)

       

         friendsData.push(newFriend);
          res.json(match);


    });

    //just so I can clear table while testing
    app.get("/api/cleartables", function(req, res) {
        friendsData = [];
        
});
};