define(['defaultConfig', 'core/GameObject', 'util/EventBus', 'input/KeyboardInput', 'input/MouseInput', 'behaviors/CollisionDetector'], function (defaultConfig, GameObject, EventBus, KeyboardInput, MouseInput, CollisionDetector) {
    function Engine(config){
        config = config || defaultConfig;

        var context = config.context;
        var root = new GameObject();
        var lastUpdate = null;

        this.viewport = config.viewport;
        this.events = new EventBus();

        root.add(new CollisionDetector());
        KeyboardInput.connectTo(this);
        MouseInput.connectTo(this);

        this.start = function(){
            root.start(this);
            setInterval(update, 0);
            setInterval(draw, config.refreshRate);
        };

        function update(){
            var now = getMilliseconds();
            var delta = lastUpdate == null ? 0 : (now - lastUpdate) / 1000;
            lastUpdate = now;
            root.update(delta);
        }

        function getMilliseconds(){
            return new Date().getTime();
        }

        function draw(){
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.clearRect(0, 0, config.viewport.width, config.viewport.height);
            context.translate(0, config.viewport.height);
            context.scale(1, -1);
            root.draw(context);
        }

        this.add = root.add.bind(root);

        this.remove = root.remove.bind(root);
    }

    return Engine;
});
