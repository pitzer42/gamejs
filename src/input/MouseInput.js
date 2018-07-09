define(['math/Vector', 'defaultConfig'], function (Vector, defaultConfig) {
    var MouseInput = {
        MOUSE_DOWN: 'MOUSE_DOWN',
        MOUSE_UP: 'MOUSE_UP',
        MOUSE_MOVE: 'MOUSE_MOVE'
    };

    MouseInput.connectTo = function (engine) {
        var events = engine.events;

        function mousePosition(mouseEvent){
            var position = new Vector();
            position.x = mouseEvent.clientX - engine.viewport.x;
            position.y = mouseEvent.clientY - engine.viewport.y;
            return position;
        }

        window.addEventListener('mousedown', onMouseDown, true);
        window.addEventListener('mouseup', onMouseUp, true);
        window.addEventListener('mousemove', onMouseMove, true);

        function onMouseDown(event) {
            events.emit(MouseInput.MOUSE_DOWN, mousePosition(event));
        }

        function onMouseUp(event) {
            events.emit(MouseInput.MOUSE_UP, mousePosition(event));
        }

        function onMouseMove(event) {
            events.emit(MouseInput.MOUSE_MOVE, mousePosition(event));
        }
    };

    return MouseInput;
});

