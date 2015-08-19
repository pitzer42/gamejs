define(['engine', 'core/GameObject', 'behaviors/Collider', 'math/Rectangle', 'behaviors/EightWayMovement', 'math/Vector', 'math/Circle', 'math/Segment'], function (engine, GameObject, Collider, Rectangle, EightWayMovement, Vector, Circle, Segment) {
    var wall = new GameObject();
    var wallShape = new Segment(0,0,100,100);//new Rectangle(0, 0, 50, 150);//new Circle();
    wall.addBehavior(wallShape);
    wall.addBehavior(new Collider(wallShape));
    wall.position = new Vector(300, 200);

    var player = new GameObject();
    var playerShape = new Circle(0,0,20);//new Rectangle(0, 0, 20, 20);
    player.addBehavior(playerShape);
    player.addBehavior(new Collider(playerShape));
    player.addBehavior(new EightWayMovement(100));
    player.addBehavior({
        onCollision: function(){
            console.log('ok');
        }
    });

    engine.add(wall);
    engine.add(player);
    engine.start();
});