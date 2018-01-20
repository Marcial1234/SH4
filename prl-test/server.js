var config_loader = require('dotenv');
config_loader.load();

function startServer() {
  var app = require("./server/app");
  var server = app.start();
}

function waitForHerokuVariables(count) {
    startServer();
  // if (process.env.MONGODB_URI)
  // else {
  //   // console.log("loading...", count);
  //   // Recurses ~1100 times... wow
  //   config_loader.load();
  //   waitForHerokuVariables(count+1);
  // }
}

waitForHerokuVariables(1);
