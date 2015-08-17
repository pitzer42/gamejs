define(['engine', 'core/GameObject', 'math/Vector', 'behaviors/VerticalMovement', 'behaviors/RectangleCollider', 'input/MouseInput'], function (engine, GameObject, Vector, VerticalMovement, RectangleCollider, MouseInput) {

    function RectangleSprite(color) {
        this.draw = function (context2D) {
            context2D.beginPath();
            context2D.rect(0, 0, 50, 100);
            context2D.fillStyle = color;
            context2D.fill();
            context2D.lineWidth = 3;
            context2D.strokeStyle = 'black';
            context2D.stroke();
        };
    }

    var player = new GameObject();
    player.position = new Vector(50, 300);
    player.addBehavior(new RectangleCollider(50, 100));
    player.addBehavior(new RectangleSprite('blue'));
    player.addBehavior(new VerticalMovement(100));

    var enemy = new GameObject();
    enemy.position = new Vector(550, 300);
    enemy.addBehavior(new RectangleSprite('red'));

    var ball = new GameObject();
    ball.addBehavior({
        start: function () {
            this.velocity = new Vector(-1, 1).scale(100);
            this.gameObject.position = new Vector(300, 0);
            this.gameObject.addBehavior(new RectangleCollider(25, 25));
        },

        draw: function (context2D) {
            context2D.beginPath();
            context2D.rect(0, 0, 25, 25);
            context2D.fillStyle = 'green';
            context2D.fill();
            context2D.lineWidth = 3;
            context2D.strokeStyle = 'black';
            context2D.stroke();
        },

        update: function (delta) {
            var position = this.gameObject.position;
            position.translate(position.sum(this.velocity.scale(delta)));
            if(position.y < 0){
                position.y = 0;
                this.velocity.y = -this.velocity.y;
            }else if(position.y > 470){
                position.y = 470;
                this.velocity.y = -this.velocity.y;
            }
            if(position.x > 600 || position.x < 0){
                position.translate(new Vector(300, 235));
                this.velocity.x = -this.velocity.x;
            }
        },

        onCollision: function (collider) {
            console.log('ok');
            this.velocity.x = -this.velocity.x;
        }
    });

    ball.addBehavior({
        start: function(){
            engine.events.on(MouseInput.MOUSE_MOVE, function(position){
               console.log(position.toString());
            });
        }
    });

    engine.add(ball);
    engine.add(player);
    engine.add(enemy);
    engine.start();
});