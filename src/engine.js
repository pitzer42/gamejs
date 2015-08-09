define(['GameObject', 'EventBus'], function (GameObject, EventBus) {
    var events = new EventBus();

    events.SPACE_DOWN = 'SPACE_DOWN';
    events.LEFT_ARROW_DOWN = 'LEFT_ARROW_DOWN';
    events.RIGHT_ARROW_DOWN = 'RIGHT_ARROW_DOWN';
    events.DOWN_ARROW_DOWN = 'DOWN_ARROW_DOWN';
    events.UP_ARROW_DOWN = 'UP_ARROW_DOWN';

    events.SPACE_PRESS = 'SPACE_PRESS';
    events.LEFT_ARROW_PRESS = 'LEFT_ARROW_PRESS';
    events.RIGHT_ARROW_PRESS = 'RIGHT_ARROW_PRESS';
    events.DOWN_ARROW_PRESS = 'DOWN_ARROW_PRESS';
    events.UP_ARROW_PRESS = 'UP_ARROW_PRESS';

    events.SPACE_UP = 'SPACE_UP';
    events.LEFT_ARROW_UP = 'LEFT_ARROW_UP';
    events.RIGHT_ARROW_UP = 'RIGHT_ARROW_UP';
    events.DOWN_ARROW_UP = 'DOWN_ARROW_UP';
    events.UP_ARROW_UP = 'UP_ARROW_UP';

    window.addEventListener('keydown', onKeyDown, true);
    window.addEventListener('keypress', onKeyPress, true);
    window.addEventListener('keyup', onKeyUp, true);

    function onKeyDown(event) {
        switch (event.key) {
            case ' ':
                events.emit(events.SPACE_DOWN);
                break;
            case 'Left':
                events.emit(events.LEFT_ARROW_DOWN);
                break;
            case 'ArrowLeft':
                events.emit(events.LEFT_ARROW_DOWN);
                break;
            case 'Right':
                events.emit(events.RIGHT_ARROW_DOWN);
                break;
            case 'ArrowRight':
                events.emit(events.RIGHT_ARROW_DOWN);
                break;
            case 'Down':
                events.emit(events.DOWN_ARROW_DOWN);
                break;
            case 'DownArrow':
                events.emit(events.DOWN_ARROW_DOWN);
                break;
            case 'Up':
                events.emit(events.UP_ARROW_DOWN);
                break;
            case 'UpArrow':
                events.emit(events.UP_ARROW_DOWN);
                break;
        }
    }

    function onKeyPress(event) {
        switch (event.key) {
            case ' ':
                events.emit(events.SPACE_PRESS);
                break;
            case 'Left':
                events.emit(events.LEFT_ARROW_PRESS);
                break;
            case 'ArrowLeft':
                events.emit(events.LEFT_ARROW_PRESS);
                break;
            case 'Right':
                events.emit(events.RIGHT_ARROW_PRESS);
                break;
            case 'ArrowRight':
                events.emit(events.RIGHT_ARROW_PRESS);
                break;
            case 'Down':
                events.emit(events.DOWN_ARROW_PRESS);
                break;
            case 'DownArrow':
                events.emit(events.DOWN_ARROW_PRESS);
                break;
            case 'Up':
                events.emit(events.UP_ARROW_PRESS);
                break;
            case 'UpArrow':
                events.emit(events.UP_ARROW_PRESS);
                break;
        }
    }

    function onKeyUp(event) {
        switch (event.key) {
            case ' ':
                events.emit(events.SPACE_UP);
                break;
            case 'Left':
                events.emit(events.LEFT_ARROW_UP);
                break;
            case 'ArrowLeft':
                events.emit(events.LEFT_ARROW_UP);
                break;
            case 'Right':
                events.emit(events.RIGHT_ARROW_UP);
                break;
            case 'ArrowRight':
                events.emit(events.RIGHT_ARROW_UP);
                break;
            case 'Down':
                events.emit(events.DOWN_ARROW_UP);
                break;
            case 'DownArrow':
                events.emit(events.DOWN_ARROW_UP);
                break;
            case 'Up':
                events.emit(events.UP_ARROW_UP);
                break;
            case 'UpArrow':
                events.emit(events.UP_ARROW_UP);
                break;
        }
    }

    var REFRESH_RATE = 1000 / 60;
    var root = new GameObject();
    var lastUpdate = null;
    var context2D = document.getElementById('game-canvas').getContext('2d');

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
