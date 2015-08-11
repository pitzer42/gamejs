require(['engine', 'core/GameObject', 'behaviors/Behaviors', 'math/Vector', 'behaviors/Sprite', 'behaviors/AnimatedSprite', 'behaviors/FourWayMovement'],
    function (engine, GameObject, Behaviors, Vector, Sprite, AnimatedSprite, FourWayMovement) {

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
        box1.addBehavior(new FourWayMovement(100));

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

        engine.add(box1);
        engine.add(box3);
        engine.add(anim);
        engine.start();
    });