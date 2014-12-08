var request = require('request');

function getServer() {
    request("http://socket-623595399.us-east-1.elb.amazonaws.com/servers", function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(body);
        }
    })
};

setInterval(getServer, 5);