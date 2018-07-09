define(['Engine', 'core/GameObject', 'input/KeyboardInput', 'math/Circle', 'behaviors/EightWayMovement', 'behaviors/Collider', 'math/Polygon', 'math/Vector'], function (Engine, GameObject, KeyboardInput, Circle, EightWayMovement, Collider, Polygon, Vector) {
    var mesh = new GameObject({
        draw: function (context) {
            var vector = new Vector();
            for (var i = 0; i < 13; i++) {
                for (var j = 0; j < 10; j++) {
                    vector.translate(i * 50, j * 50);
                    vector.draw(context);
                }
            }
        }
    });

    var obj = new GameObject({
        draw: function(context){
            this.transform.position.draw(context);
            console.log(this.transform.position.toString());
        }
    });
    obj.add(new EightWayMovement(50));

    var circle2 = new Circle(0,0,25);
    var obj2 = new GameObject(circle2);
    obj2.add({
        update: function(delta){
            this.transform.rotation += delta * 0.36;
        }
    });

    var circle3 = new Circle(0,0,15);
    var obj3 = new GameObject(circle3);
    obj3.transform.position.translate(100,0);

    obj2.add(obj3);
    obj2.add(new EightWayMovement(50));

    var engine = new Engine();
    engine.add(mesh);
    engine.add(obj2);
    engine.add(obj);

    engine.start();
});