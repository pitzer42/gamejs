define(['engine', 'core/GameObject', 'math/Vector', 'behaviors/VerticalMovement', 'behaviors/Collider', 'math/Rectangle', 'math/Circle'], function (engine, GameObject, Vector, VerticalMovement, Collider, Rectangle, Circle) {

    var rect = new Rectangle(0, 0, 50, 100);

    var player = new GameObject();
    player.position = new Vector(50, 300);

    player.addBehavior(new Collider(rect));
    player.addBehavior(rect);
    player.addBehavior(new VerticalMovement(100));

    var enemy = new GameObject();
    enemy.position = new Vector(550, 300);
    enemy.addBehavior(new Collider(rect));
    enemy.addBehavior(rect);

    var ball = new GameObject();
    ball.position = new Vector(300, 0);
    ball.addBehavior(new Collider(new Circle(0, 0, 25)));
    ball.addBehavior(new Rectangle(0, 0, 25, 25));
    ball.addBehavior({
        velocity: new Vector(-1, 1).scale(100),
        update: function (delta) {
            var position = this.gameObject.position;
            position.translate(position.sum(this.velocity.scale(delta)));
            if (position.y < 0) {
                position.y = 0;
                this.velocity.y = -this.velocity.y;
            } else if (position.y > 470) {
                position.y = 470;
                this.velocity.y = -this.velocity.y;
            }
            if (position.x > 600 || position.x < 0) {
                position.translate(new Vector(300, 235));
                this.velocity.x = -this.velocity.x;
            }
        },
        onCollision: function (collider) {
            this.velocity.x = -this.velocity.x;
        }
    });

    engine.add(ball);
    engine.add(player);
    engine.add(enemy);
    engine.start();
});