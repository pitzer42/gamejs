define(['context2D'], function (context2D) {

    var components = [];
    var lastUpdate = null;
    var REFRESH_RATE = 1000/60;

    function add(component){
        components.push(component);
    }

    function remove(component){
        var index = components.indexOf(component);
        if(index > 0)
            components.slice(index, 1);
    }

    function getMilliseconds(){
        return new Date().getTime();
    }

    function update(){
        var now = getMilliseconds();
        delta = lastUpdate == null ? 0 : now - lastUpdate;
        lastUpdate = now;
        for(var i = 0; i < components.length; i++)
            components[i].update(delta);
    }

    function draw(){
        context2D.clearRect(0, 0, context2D.canvas.width, context2D.canvas.height);
        for(var i = 0; i < components.length; i++)
            components[i].draw(context2D);
    }

    function start(){
        setInterval(update, 0);
        setInterval(draw, REFRESH_RATE);
    }

    return {
        add: add,
        remove: remove,
        start: start
    };
});
