define(['DefaultContext2D', 'GameComponent'], function (DefaultContext2D, GameComponent) {
    function Engine(context2D) {
        var REFRESH_RATE = 1000 / 60;
        var root = new GameComponent();
        var lastUpdate = null;
        context2D = context2D || new DefaultContext2D();

        function getMilliseconds() {
            return new Date().getTime();
        }

        function update() {
            var now = getMilliseconds();
            var delta = 0;
            if (lastUpdate != null)
                delta = (now - lastUpdate) / 1000;
            lastUpdate = now;
            root.update(delta);
        }

        function draw() {
            context2D.setTransform(1, 0, 0, 1, 0, 0);
            context2D.clearRect(0, 0, context2D.canvas.width, context2D.canvas.height);
            root.draw(context2D);
        }

        this.start = function () {
            setInterval(update, 0);
            setInterval(draw, REFRESH_RATE);
        };

        this.add = function (component) {
            root.add(component);
        };

        this.remove = function (component) {
            root.remove(component);
        }
    }

    return Engine;
});
