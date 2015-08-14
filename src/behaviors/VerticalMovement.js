define(['engine', 'input/KeyboardInput'], function (engine, KeyboardEvents) {

    function VerticalMovement(speed) {

        var direction = 0;

        engine.events.on(KeyboardEvents.DOWN_ARROW_PRESS, function () {
            direction = -1;
        });

        engine.events.on(KeyboardEvents.UP_ARROW_PRESS, function () {
            direction = 1;
        });

        engine.events.on(KeyboardEvents.DOWN_ARROW_UP, function () {
            direction = 0;
        });

        engine.events.on(KeyboardEvents.UP_ARROW_UP, function () {
            direction = 0;
        });

        this.update = function (delta) {
            this.gameObject.position.y += direction * speed * delta;
        };
    }

    return VerticalMovement;
});