define(['math/Vector', 'input/KeyboardInput'], function (Vector, KeyboardEvents) {

    function FourWayMovement(speed) {
        var direction = new Vector();

        this.start = function (engine) {
            var events = engine.events;

            events.on(KeyboardEvents.LEFT_ARROW_PRESS, function () {
                direction.x = -1;
                direction.y = 0;
            });

            events.on(KeyboardEvents.RIGHT_ARROW_PRESS, function () {
                direction.x = 1;
                direction.y = 0;
            });

            events.on(KeyboardEvents.DOWN_ARROW_PRESS, function () {
                direction.x = 0;
                direction.y = -1;
            });

            events.on(KeyboardEvents.UP_ARROW_PRESS, function () {
                direction.x = 0;
                direction.y = 1;
            });

            events.on(KeyboardEvents.LEFT_ARROW_UP, function () {
                direction.x = 0;
            });

            events.on(KeyboardEvents.RIGHT_ARROW_UP, function () {
                direction.x = 0;
            });

            events.on(KeyboardEvents.DOWN_ARROW_UP, function () {
                direction.y = 0;
            });

            events.on(KeyboardEvents.UP_ARROW_UP, function () {
                direction.y = 0;
            });
        };

        this.update = function (delta) {
            this.transform.position.setSum(direction.scale(speed * delta));
        };
    }

    return FourWayMovement;
});