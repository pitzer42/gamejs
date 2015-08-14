define(['engine', 'core/GameObject', 'math/Vector', 'behaviors/FourWayMovement', 'behaviors/RectangleCollider'], function (engine, GameObject, Vector, FourWayMovement, RectangleCollider) {
    function RectangleSprite(color) {
        this.color = color || 'blue';
        this.draw = function (context2D) {
            context2D.beginPath();
            context2D.rect(0, 0, 50, 100);
            context2D.fillStyle = this.color;
            context2D.fill();
            context2D.lineWidth = 3;
            context2D.strokeStyle = 'black';
            context2D.stroke();
        };
    }

    var top = new GameObject();
    top.addBehavior({
        draw: function (context2D) {
            context2D.beginPath();
            context2D.rect(-10, -10, 20, 20);
            context2D.fillStyle = 'green';
            context2D.fill();
            context2D.strokeStyle = 'black';
            context2D.stroke();
        }
    });
    top.addBehavior(new FourWayMovement(50));
    top.position = new Vector(300, 300);


    var box1 = new GameObject();
    var sprite1 = new RectangleSprite();
    box1.addBehavior(new RectangleCollider(50, 100));
    box1.addBehavior(sprite1);
    box1.addBehavior({
        onCollision: function (collider) {
            if (sprite1.color === 'blue')
                sprite1.color = 'red';
            else
                sprite1.color = 'blue';
        }
    });
    box1.position = new Vector(100, 0);
    box1.rotation = Math.PI / 4;

    var wall = new GameObject();
    wall.addBehavior(new RectangleCollider(50, 100));
    wall.addBehavior(new RectangleSprite('brown'));
    wall.position = new Vector(450, 300);

    top.addChild(box1);
    engine.add(top);
    engine.add(wall);
    engine.start();
});