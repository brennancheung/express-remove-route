module.exports = function removeRoute(app, path) {
    var found, route, stack, idx;
    
    found = findRoute(app, path);
    route = found.route;
    stack = found.stack;

    if (!route) return false;

    idx = stack.indexOf(route);
    stack.splice(idx, 1);
    return true;
};

module.exports.findRoute = findRoute;

function findRoute(app, path) {
    var route, stack;

    stack = app._router.stack;

    function _findRoute(path) {
        stack.forEach(function(layer) {
            if (!layer) return;
            if (layer && !layer.match(path)) return;
            if (['query', 'expressInit'].indexOf(layer.name) != -1) return;
            if (layer.name == 'router') {
                stack = layer.handle.stack;
                _findRoute(trimPrefix(path, layer.path));
            } else {
                route = layer;
            }
        });
    }

    _findRoute(path, stack);

    if (!route) return null;
    return {route: route, stack: stack};
}

function trimPrefix(path, prefix) {
    // This assumes prefix is already at the start of path.
    return path.substr(prefix.length);
}
