# express-remove-route
Delete a route in express at runtime.

# Overview
I wanted the ability to dynamically control Express routing but
was not able to delete a route at runtime.  This module solves that
problem.

# Installation

    npm install express-remove-route

# Usage

    var removeRoute = require('express-remove-route');

    var app = express();
    var router = express.Router();

    router.get('/remove/me', function(res, res) {
        res.send('I should not be here');
    });

    app.use('/foo', router);

    removeRoute(app, '/foo/remove/me');

Note that the full path is supplied to `removeRoute` not just its
local path from within the `router`.

# Reference
## removeRoute(app, resourcePath, resourceMethod);
This is the function that remove a resource  route on the fly 
The param `app` is the express application(app) on which you want remove the resource.  
the param `resourcePath` is the resource path to remove on the fly
the param `resourceMethod` is the resource method  with a given path to remove on the fly. If null or undefined all
routes with the given path are removed.

# Examples

## Remove all resources with a given path

    var removeRoute = require('express-remove-route');

    var app = express();
    var router = express.Router();

    router.get('/remove/me', function(res, res) {
        res.send('I should not be here');   // removed
    });
    
    router.put('/remove/me', function(res, res) {
           res.send('I should not be here');    // removed
    });

    app.use('/foo', router);

    removeRoute(app, '/foo/remove/me');  // all routes with a path /foo/remove/me are removed 

## Remove all resources with a given path and method

    var removeRoute = require('express-remove-route');

    var app = express();
    var router = express.Router();

    router.get('/remove/me', function(res, res) {
        res.send('I should not be here'); // removed
    });
    
    router.put('/remove/me', function(res, res) {
           res.send('I should be here');  // not removed
    });

    app.use('/foo', router);

    removeRoute(app, '/foo/remove/me','get');  // all routes with a path /foo/remove/me in method get are removed 



# Caveat emptor
This module has been tested against Express 4.13.3.  In theory,
it should work with all of 4.x.

However, it will definitely *NOT* work with 3.x.

Also, it makes use of undocumented private Express methods and data
structures that may be subject to change.

Contributors
------------
Brennan Cheung ([git@brennancheung.com](mailto:git@brennancheung.com))

Alessandro Romanino ([a.romanino@gmail.com](mailto:a.romanino@gmail.com))
