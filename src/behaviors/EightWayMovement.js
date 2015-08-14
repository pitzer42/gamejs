define(['engine', 'math/Vector', 'input/KeyboardInput'], function (engine, Vector, KeyboardEvents) {

    function EightWayMovement(speed) {

        var direction = new Vector();

        engine.events.on(KeyboardEvents.LEFT_ARROW_PRESS, function () {
            direction.x = -1;
        });

        engine.events.on(KeyboardEvents.RIGHT_ARROW_PRESS, function () {
            direction.x = 1;
        });

        engine.events.on(KeyboardEvents.DOWN_ARROW_PRESS, function () {
            direction.y = -1;
        });

        engine.events.on(KeyboardEvents.UP_ARROW_PRESS, function () {
            direction.y = 1;
        });

        engine.events.on(KeyboardEvents.LEFT_ARROW_UP, function () {
            direction.x = 0;
        });

        engine.events.on(KeyboardEvents.RIGHT_ARROW_UP, function () {
            direction.x = 0;
        });

        engine.events.on(KeyboardEvents.DOWN_ARROW_UP, function () {
            direction.y = 0;
        });

        engine.events.on(KeyboardEvents.UP_ARROW_UP, function () {
            direction.y = 0;
        });

        this.update = function (delta) {
            var position = this.gameObject.position;
            position.translate(position.sum(direction.scale(speed * delta)));
        };
    }

    return EightWayMovement;
});