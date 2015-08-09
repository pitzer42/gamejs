define(['engine', 'Vector'], function(engine, Vector){

    function verticalMovement(speed){
        var direction = 0;

        engine.events.on(engine.events.DOWN_ARROW_PRESS, function () {
            direction = 1;
        });

        engine.events.on(engine.events.UP_ARROW_PRESS, function () {
            direction = -1;
        });

        engine.events.on(engine.events.DOWN_ARROW_UP, function () {
            direction = 0;
        });

        engine.events.on(engine.events.UP_ARROW_UP, function () {
            direction = 0;
        });

        return function(delta){
            this.position.y += direction * speed * delta;
        }
    }

    function horizontalMovement(speed){
        var direction = 0;

        engine.events.on(engine.events.LEFT_ARROW_PRESS, function () {
            direction = -1;
        });

        engine.events.on(engine.events.RIGHT_ARROW_PRESS, function () {
            direction = 1;
        });

        engine.events.on(engine.events.LEFT_ARROW_UP, function () {
            direction = 0;
        });

        engine.events.on(engine.events.RIGHT_ARROW_UP, function () {
            direction = 0;
        });

        return function(delta){
            this.position.x += direction * speed * delta;
        }
    }

    function fourWayMovement(speed){
        var vertical = verticalMovement(speed);
        var horizontal = horizontalMovement(speed);

        return function(delta){
            vertical.call(this, delta);
            horizontal.call(this, delta);
        }
    }

    return {
        fourWayMovement: fourWayMovement
    };
});