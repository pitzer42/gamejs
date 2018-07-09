define(['behaviors/VerticalMovement', 'behaviors/HorizontalMovement'], function (VerticalMovement, HorizontalMovement) {
    function EightWayMovement(speed) {
        var vertical = new VerticalMovement(speed);
        var horizontal = new HorizontalMovement(speed);

        this.start = function (engine) {
            vertical.gameObject = horizontal.gameObject = this.gameObject;
            vertical.transform = horizontal.transform = this.transform;
            vertical.start(engine);
            horizontal.start(engine);
        };

        this.update = function (delta) {
            vertical.update(delta);
            horizontal.update(delta);
        };
    }

    return EightWayMovement;
});