require(['engine', 'GameObject', 'Behaviors', 'Vector', 'Sprite', 'AnimatedSprite'], function (engine, GameObject, Behaviors, Vector, Sprite, AnimatedSprite) {
    var spriteSheetURL= "http://answers.unity3d.com/storage/temp/5358-1123_01_01.jpg";
    var character = new GameObject();
    var charSprite = new AnimatedSprite(spriteSheetURL, 125, 125, 500, 8, 1);
    character.addChild(charSprite);

    var box = new GameObject();
    box.position = new Vector(200, 200);
    box.addChild({
        draw:function(context2D){
            context2D.beginPath();
            context2D.rect(-50, -50, 100, 100);
            context2D.fillStyle = 'yellow';
            context2D.fill();
            context2D.lineWidth = 7;
            context2D.strokeStyle = 'black';
            context2D.stroke();
        },
        update: function(){
        }
    });
    box.addBehavior(function(delta){
        this.rotation += delta * 3.6;
    });

    engine.events.on(engine.events.SPACE_DOWN, function(){
       box.visible = !box.visible;
    });

    var player = new GameObject();
    var spriteURL = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
    player.addChild(new Sprite(spriteURL, 100, 100));
    player.addBehavior(Behaviors.fourWayMovement(100));

    engine.add(character);
    engine.add(box);
    engine.add(player);
    engine.start();
});