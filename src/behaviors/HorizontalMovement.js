define(['Engine', 'input/KeyboardInput'], function (engine, KeyboardEvents) {
    function HorizontalMovement(speed) {
        this.speed = speed;
        var direction = 0;

        this.start = function (engine) {
            var events = engine.events;

            events.on(KeyboardEvents.LEFT_ARROW_PRESS, function () {
                direction = -1;
            });

            events.on(KeyboardEvents.RIGHT_ARROW_PRESS, function () {
                direction = 1;
            });

            events.on(KeyboardEvents.LEFT_ARROW_UP, function () {
                direction = 0;
            });

            events.on(KeyboardEvents.RIGHT_ARROW_UP, function () {
                direction = 0;
            });
        };

        this.update = function (delta) {
            this.transform.position.x += direction * this.speed * delta;
        };
    }

    return HorizontalMovement;
});