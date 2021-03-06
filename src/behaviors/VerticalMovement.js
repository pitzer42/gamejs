define(['Engine', 'input/KeyboardInput'], function (engine, KeyboardEvents) {
    function VerticalMovement(speed) {
        this.speed = speed;
        var direction = 0;

        this.start = function (engine) {
            var events = engine.events;

            events.on(KeyboardEvents.DOWN_ARROW_PRESS, function () {
                direction = -1;
            });

            events.on(KeyboardEvents.UP_ARROW_PRESS, function () {
                direction = 1;
            });

            events.on(KeyboardEvents.DOWN_ARROW_UP, function () {
                direction = 0;
            });

            events.on(KeyboardEvents.UP_ARROW_UP, function () {
                direction = 0;
            });
        };

        this.update = function (delta) {
            this.transform.position.y += direction * this.speed * delta;
        };
    }

    return VerticalMovement;
});