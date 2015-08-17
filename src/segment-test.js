define(['engine', 'core/GameObject', 'math/Vector', 'math/Segment'], function (engine, GameObject, Vector, Segment) {
    var a = new Vector(10, 100);
    var b = new Vector(100, 10);
    var s1 = new Segment(a, b);

    var c = new Vector(10, 10);
    var d = new Vector(100, 100);
    var s2 = new Segment(c, d);

    var intersection = s1.intersects(s2);
    console.log(intersection);
    var obj = new GameObject();
    obj.addBehavior(s1);
    obj.addBehavior(s2);
    obj.addBehavior({
        draw: function (context2D) {
            context2D.beginPath();
            context2D.rect(intersection.x, -intersection.y, 5, 5);
            context2D.fillStyle = 'green';
            context2D.fill();
            context2D.stroke();
        }
    });

    engine.add(obj);
    engine.start();
});