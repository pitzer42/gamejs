require(['Engine', 'GameComponent', 'Vector2', 'Sprite'], function (Engine, GameComponent, Vector2, Sprite) {
    function Box() {
        GameComponent.call(this);
        this.width = 100;
        this.height = 50;
        this.velocity = new Vector2();
    }

    Box.prototype = new GameComponent();

    Box.prototype.draw = function (context2D) {
        GameComponent.prototype.draw.call(this, context2D);
        context2D.beginPath();
        context2D.rect(0, 0, this.width, this.height);
        context2D.fillStyle = 'yellow';
        context2D.fill();
        context2D.lineWidth = 7;
        context2D.strokeStyle = 'black';
        context2D.stroke();
    }

    Box.prototype.update = function (delta) {
        GameComponent.prototype.update.call(this, delta);
        this.position = this.position.sum(this.velocity.scale(delta * 100));
        this.rotation += this.velocity.x * delta;
    }

    var engine = new Engine();
    var box1 = new Box();
    var box2 = new Box();
    var box3 = new Box();
    var sprite = new Sprite('http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg', new Vector2(200, 200));

    box1.position = new Vector2(235, 100);
    box2.position = new Vector2(235, 100);
    box3.position = new Vector2(235, 100);

    sprite.position = new Vector2(-50, -50);
    box1.velocity = new Vector2(1,1);
    box2.velocity = new Vector2(-1,-1);
    box3.velocity = new Vector2(0,-1);

    box2.add(sprite);
    engine.add(box1);
    engine.add(box2);
    engine.add(box3);
    engine.start();
});