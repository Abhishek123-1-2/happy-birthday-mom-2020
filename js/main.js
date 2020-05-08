requirejs.config({
  baseUrl: 'js/lib',
  shim : {
    "bootstrap" : { "deps" :['jquery'] }
  },
  paths: {
    app: '../app',
    jquery: 'jquery-2.1.4',
    bootstrap: 'bootstrap-trick-gh' // Optional: change to bootstrap.min
  }
});
        
requirejs(['app', 'bootstrap'], function(app) {
  //This function is called when ./app.js is loaded.
  //If app.js calls define(), then this function is not fired until
  //app's dependencies have loaded, and the app argument will hold
  //the module value for "./app".
  app.run();
});
