define(function () {
    function EventBus() {
        var map = {};

        this.on = function (event, action) {
            var actions = map[event];
            if (actions == undefined)
                map[event] = [action];
            else
                actions.push(action);
        };

        this.off = function (event, action) {
            var actions = map[event];
            if (actions != undefined) {
                var index = actions.indexOf(action);
                actions.splice(index, 1);
            }
        };

        this.once = function (event, action) {
            var that = this;
            this.on(event, function () {
                action.apply(null, arguments);
                that.off(event, action);
            });
        };

        this.emit = function (event, args) {
            var actions = map[event];
            if (actions != undefined) {
                actions.forEach(function (action) {
                    action(args);
                });
            }
        };
    }

    return EventBus;
});