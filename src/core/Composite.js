define(function () {
    function Composite() {

        this.add = this.push;

        this.remove = function (child) {
            var index = this.indexOf(child);
            if (index > -1) {
                this.splice(index, 1);
                return true;
            }
            return false;
        };

        function propagator(method) {
            return function () {
                for (var i = 0; i < this.length; i++) {
                    var child = this[i];
                    if(child[method])
                        child[method].apply(child, arguments);
                }
            };
        }

        for (var i = 0; i < arguments.length; i++) {
            var method = arguments[i];
            this[method] = propagator(method);
        }
    }

    Composite.prototype = new Array();

    return Composite;
});