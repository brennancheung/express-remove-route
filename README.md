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

# Caveat emptor
This module has been tested against Express 4.13.3.  In theory,
it should work with all of 4.x.

However, it will definitely *NOT* work with 3.x.

Also, it makes use of undocumented private Express methods and data
structures that may be subject to change.
