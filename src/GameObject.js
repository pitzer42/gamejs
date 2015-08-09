define(['Vector'], function (Vector) {
    function GameObject() {
        this.position = new Vector();
        this.rotation = 0;
        this.parent = null;
        this.visible = true;

        var children = [];
        var behaviors = [];

        this.addChild = function (gameObject) {
            gameObject.parent = this;
            children.push(gameObject);
        };

        this.removeChild = function (gameObject) {
            var index = children.indexOf(gameObject);
            if (index > -1) {
                children.slice(index, 1);
                gameObject.parent = null;
            }
        };

        this.addBehavior = function (behavior) {
            behaviors.push(behavior.bind(this));
        };

        this.removeBehavior = function (update) {
            var index = behaviors.indexOf(update);
            if (index > -1)
                behaviors.slice(index, 1);
        };

        this.update = function (delta) {
            for (var i = 0; i < behaviors.length; i++)
                behaviors[i](delta);
            for (var i = 0; i < children.length; i++)
                children[i].update(delta);
        };

        this.draw = function (context2D) {
            if(!this.visible)
                return;
            context2D.translate(this.position.x, this.position.y);
            context2D.rotate(this.rotation);
            for (var i = 0; i < children.length; i++) {
                context2D.save();
                children[i].draw(context2D);
                context2D.restore();
            }
        };
    }

    return GameObject;
});