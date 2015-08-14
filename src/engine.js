define(['config', 'core/GameObject', 'core/EventBus', 'input/KeyboardInput', 'behaviors/CollisionDetector'], function (config, GameObject, EventBus, KeyboardEvents, CollisionDetector) {
    var context2D = config.CONTEXT_2D;
    var events = new EventBus();
    var root = new GameObject();
    var lastUpdate = null;

    root.addBehavior(new CollisionDetector());

    KeyboardEvents.connectTo(events);

    function getMilliseconds() {
        return new Date().getTime();
    }

    function start() {
        root.start();
        setInterval(update, 0);
        setInterval(draw, config.REFRESH_RATE);
    };

    function draw() {
        context2D.setTransform(1, 0, 0, 1, 0, 0);
        context2D.clearRect(0, 0, context2D.canvas.width, context2D.canvas.height);
        context2D.translate(0, context2D.canvas.height);
        root.draw(context2D);
    }

    function update() {
        var now = getMilliseconds();
        var delta = lastUpdate == null ? 0 : (now - lastUpdate) / 1000;
        lastUpdate = now;
        root.update(delta);
    }

    return {
        events: events,
        start: start,
        add: root.addChild.bind(root),
        remove: root.removeChild.bind(root)
    };
});
