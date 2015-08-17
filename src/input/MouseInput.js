define(['math/Vector', 'config'], function (Vector, config) {
    var MouseInput = {
        MOUSE_DOWN: 'MOUSE_DOWN',
        MOUSE_UP: 'MOUSE_UP',
        MOUSE_MOVE: 'MOUSE_MOVE'
    };

    var viewport = config.CONTEXT_2D.canvas.getBoundingClientRect();

    function mousePosition(mouseEvent){
        var position = new Vector();
        position.x = mouseEvent.clientX - viewport.x;
        position.y = mouseEvent.clientY - viewport.y;
        return position;
    }

    MouseInput.connectTo = function (eventBus) {
        window.addEventListener('mousedown', onMouseDown, true);
        window.addEventListener('mouseup', onMouseUp, true);
        window.addEventListener('mousemove', onMouseMove, true);

        function onMouseDown(event) {
            eventBus.emit(MouseInput.MOUSE_DOWN, mousePosition(event));
        }

        function onMouseUp(event) {
            eventBus.emit(MouseInput.MOUSE_UP, mousePosition(event));
        }

        function onMouseMove(event) {
            eventBus.emit(MouseInput.MOUSE_MOVE, mousePosition(event));
        }
    };

    return MouseInput;
});

