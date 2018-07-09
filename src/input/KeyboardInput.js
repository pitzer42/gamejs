define(function () {
    var KeyboardInput = {
        SPACE_DOWN: 'SPACE_DOWN',
        LEFT_ARROW_DOWN: 'LEFT_ARROW_DOWN',
        RIGHT_ARROW_DOWN: 'RIGHT_ARROW_DOWN',
        DOWN_ARROW_DOWN: 'DOWN_ARROW_DOWN',
        UP_ARROW_DOWN: 'UP_ARROW_DOWN',

        SPACE_PRESS: 'SPACE_PRESS',
        LEFT_ARROW_PRESS: 'LEFT_ARROW_PRESS',
        RIGHT_ARROW_PRESS: 'RIGHT_ARROW_PRESS',
        DOWN_ARROW_PRESS: 'DOWN_ARROW_PRESS',
        UP_ARROW_PRESS: 'UP_ARROW_PRESS',

        SPACE_UP: 'SPACE_UP',
        LEFT_ARROW_UP: 'LEFT_ARROW_UP',
        RIGHT_ARROW_UP: 'RIGHT_ARROW_UP',
        DOWN_ARROW_UP: 'DOWN_ARROW_UP',
        UP_ARROW_UP: 'UP_ARROW_UP'
    };

    KeyboardInput.connectTo = function (engine) {
        var eventBus = engine.events;

        window.addEventListener('keydown', onKeyDown, true);
        window.addEventListener('keypress', onKeyPress, true);
        window.addEventListener('keyup', onKeyUp, true);

        var keyStrings = {
            SPACE: ' ',
            LEFT: 'Left',
            ARROW_LEFT: 'ArrowLeft',
            RIGHT: 'Right',
            ARROW_RIGHT: 'ArrowRight',
            DOWN: 'Down',
            ARROW_DOWN: 'ArrowDown',
            UP: 'Up',
            ARROW_UP: 'ArrowUp'
        };

        function onKeyDown(event) {
            switch (event.key) {
                case keyStrings.SPACE:
                    eventBus.emit(KeyboardInput.SPACE_DOWN);
                    break;
                case keyStrings.LEFT:
                    eventBus.emit(KeyboardInput.LEFT_ARROW_DOWN);
                    break;
                case keyStrings.ARROW_LEFT:
                    eventBus.emit(KeyboardInput.LEFT_ARROW_DOWN);
                    break;
                case keyStrings.RIGHT:
                    eventBus.emit(KeyboardInput.RIGHT_ARROW_DOWN);
                    break;
                case keyStrings.ARROW_RIGHT:
                    eventBus.emit(KeyboardInput.RIGHT_ARROW_DOWN);
                    break;
                case keyStrings.DOWN:
                    eventBus.emit(KeyboardInput.DOWN_ARROW_DOWN);
                    break;
                case keyStrings.ARROW_DOWN:
                    eventBus.emit(KeyboardInput.DOWN_ARROW_DOWN);
                    break;
                case keyStrings.UP:
                    eventBus.emit(KeyboardInput.UP_ARROW_DOWN);
                    break;
                case keyStrings.ARROW_UP:
                    eventBus.emit(KeyboardInput.UP_ARROW_DOWN);
                    break;
            }
        }

        function onKeyPress(event) {
            switch (event.key) {
                case keyStrings.SPACE:
                    eventBus.emit(KeyboardInput.SPACE_PRESS);
                    break;
                case keyStrings.LEFT:
                    eventBus.emit(KeyboardInput.LEFT_ARROW_PRESS);
                    break;
                case keyStrings.ARROW_LEFT:
                    eventBus.emit(KeyboardInput.LEFT_ARROW_PRESS);
                    break;
                case keyStrings.RIGHT:
                    eventBus.emit(KeyboardInput.RIGHT_ARROW_PRESS);
                    break;
                case keyStrings.ARROW_RIGHT:
                    eventBus.emit(KeyboardInput.RIGHT_ARROW_PRESS);
                    break;
                case keyStrings.DOWN:
                    eventBus.emit(KeyboardInput.DOWN_ARROW_PRESS);
                    break;
                case keyStrings.ARROW_DOWN:
                    eventBus.emit(KeyboardInput.DOWN_ARROW_PRESS);
                    break;
                case keyStrings.UP:
                    eventBus.emit(KeyboardInput.UP_ARROW_PRESS);
                    break;
                case keyStrings.ARROW_UP:
                    eventBus.emit(KeyboardInput.UP_ARROW_PRESS);
                    break;
            }
        }

        function onKeyUp(event) {
            switch (event.key) {
                case keyStrings.SPACE:
                    eventBus.emit(KeyboardInput.SPACE_UP);
                    break;
                case keyStrings.LEFT:
                    eventBus.emit(KeyboardInput.LEFT_ARROW_UP);
                    break;
                case keyStrings.ARROW_LEFT:
                    eventBus.emit(KeyboardInput.LEFT_ARROW_UP);
                    break;
                case keyStrings.RIGHT:
                    eventBus.emit(KeyboardInput.RIGHT_ARROW_UP);
                    break;
                case keyStrings.ARROW_RIGHT:
                    eventBus.emit(KeyboardInput.RIGHT_ARROW_UP);
                    break;
                case keyStrings.DOWN:
                    eventBus.emit(KeyboardInput.DOWN_ARROW_UP);
                    break;
                case keyStrings.ARROW_DOWN:
                    eventBus.emit(KeyboardInput.DOWN_ARROW_UP);
                    break;
                case keyStrings.UP:
                    eventBus.emit(KeyboardInput.UP_ARROW_UP);
                    break;
                case keyStrings.ARROW_UP:
                    eventBus.emit(KeyboardInput.UP_ARROW_UP);
                    break;
            }
        }
    };

    return KeyboardInput;
});

