require(['pong'], function() {
/*
require(['engine', 'core/GameObject', 'math/Vector', 'behaviors/Sprite', 'behaviors/AnimatedSprite', 'behaviors/EightWayMovement', 'behaviors/FourWayMovement', 'behaviors/RectangleCollider'], function (engine, GameObject, Vector, Sprite, AnimatedSprite, EightWayMovement, FourWayMovement, RectangleCollider) {
    var box1 = new GameObject();
    box1.addBehavior({
        draw: function (context2D) {
            context2D.beginPath();
            context2D.rect(-5, -5, 10, 10);
            context2D.fillStyle = 'yellow';
            context2D.fill();
            context2D.strokeStyle = 'black';
            context2D.stroke();
            console.log(this.gameObject.position.toString());
        },
        update: function(delta){
            var position = this.gameObject.position;
            position.translate(position.rotate(delta, new Vector(100, 100)));
        }
    });

    box1.position = new Vector(50, 50);

    engine.add(box1);
    engine.start();


    var box1 = new GameObject();
    box1.addBehavior({
        draw: function (context2D) {
            context2D.beginPath();
            context2D.rect(-50, -50, 100, 100);
            context2D.fillStyle = 'yellow';
            context2D.fill();
            context2D.lineWidth = 7;
            context2D.strokeStyle = 'black';
            context2D.stroke();
        }
    });
    box1.addBehavior(new EightWayMovement(100));

    var box2 = new GameObject();
    box2.addBehavior({
        speed: 10,
        draw: function (context2D) {
            context2D.beginPath();
            context2D.rect(-50, -50, 100, 100);
            context2D.fillStyle = 'yellow';
            context2D.fill();
            context2D.lineWidth = 7;
            context2D.strokeStyle = 'black';
            context2D.stroke();
        },
        update: function (delta) {
            this.gameObject.position.y += delta * this.speed;
            this.gameObject.rotation += delta * this.speed;
        }
    });

    var box3 = new GameObject();
    box3.addBehavior({
        speed: 10,
        draw: function (context2D) {
            context2D.beginPath();
            context2D.rect(-50, -50, 100, 100);
            context2D.fillStyle = 'blue';
            context2D.fill();
            context2D.lineWidth = 7;
            context2D.strokeStyle = 'black';
            context2D.stroke();
        }
    });

    box1.addChild(box2);


    var spriteSheetURL = "http://answers.unity3d.com/storage/temp/5358-1123_01_01.jpg";
    var anim = new GameObject();
    var animSprite = new AnimatedSprite(spriteSheetURL, 125, 125, 500, 8, 0.8);
    anim.addBehavior(animSprite);
    anim.position = new Vector(300, 300);

    var col1 = new GameObject();
    col1.addBehavior({
        draw: function (context2D) {
            context2D.beginPath();
            context2D.rect(0, 0, 100, 100);
            context2D.fillStyle = 'red';
            context2D.fill();
            context2D.strokeStyle = 'black';
            context2D.stroke();
        }
    });
    col1.position = new Vector(400, 400);
    col1.addBehavior(new RectangleCollider(100, 100));

    var col2 = new GameObject();
    col2.addBehavior({
        color: 'red',
        draw: function (context2D) {
            context2D.beginPath();
            context2D.rect(0, 0, 100, 100);
            context2D.fillStyle = this.color;
            context2D.fill();
            context2D.strokeStyle = 'black';
            context2D.stroke();
        },
        onCollision: function(collider){
            this.color = 'green';
        }
    });
    col2.position = new Vector(200, 400);
    col2.addBehavior(new RectangleCollider(100, 100));
    col2.addBehavior(new FourWayMovement(100));
    col2.rotation = 45;

    engine.add(col1);
    engine.add(col2);

    engine.add(box1);
    engine.add(box3);
    engine.add(anim);
    engine.start();
    */
});