require(['engine'], function(engine){

    var counter = 0;
    var timer = {
        draw: function(){},
        update: function(delta){
            counter += delta;
            console.log(counter/1000);
        }
    };

    var speed = 0.11;
    var x = 0;
    var y = 50;
    var width = 200;
    var height = 100;
    function draw(context){
        context.beginPath();
        context.rect(x, y, width, height);
        context.fillStyle = 'yellow';
        context.fill();
        context.lineWidth = 7;
        context.strokeStyle = 'black';
        context.stroke();
    }

    function update(delta){
        x += delta * speed;
    }

    var box = {draw: draw, update: update};

    engine.add(timer);
    engine.add(box);
    engine.start();
});