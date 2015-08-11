define(['core/GameObject', 'core/EventBus', 'input/KeyboardEvents'], function (GameObject, EventBus, KeyboardEvents) {
    var events = new EventBus();
    var REFRESH_RATE = 1000 / 60;
    var root = new GameObject();
    var lastUpdate = null;
    var context2D = document.getElementById('game-canvas').getContext('2d');

    KeyboardEvents.connectTo(events);

    function getMilliseconds() {
        return new Date().getTime();
    }

    function start() {
        setInterval(update, 0);
        setInterval(draw, REFRESH_RATE);
    };

    function draw() {
        context2D.setTransform(1, 0, 0, 1, 0, 0);
        context2D.clearRect(0, 0, context2D.canvas.width, context2D.canvas.height);
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
        add: root.addChild,
        remove: root.remove
    };
});
