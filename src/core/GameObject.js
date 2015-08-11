define(['core/Composite', 'math/Vector'], function (Composite, Vector) {
    function GameObject() {
        this.position = new Vector();
        this.rotation = 0;
        this.parent = null;
        this.visible = true;
        this.active = true;

        var children = new Composite('draw', 'update');
        var behaviors = new Composite('update', 'draw');

        this.addChild = function (gameObject) {
            gameObject.parent = this;
            children.add(gameObject);
        };

        this.removeChild = function (gameObject) {
            if(children.remove(gameObject))
                gameObject.parent = null;
        };

        this.addBehavior = function (behavior) {
            behavior.gameObject = this;
            behaviors.add(behavior);
        };

        this.removeBehavior = function (behavior) {
            if(behaviors.remove(behavior))
                behavior.gameObject = null;
        };

        this.update = function (delta) {
            if(!this.active)
                return;
            behaviors.update(delta);
            children.update(delta);
        };

        this.draw = function (context2D) {
            if(!this.visible)
                return;
            context2D.save();
            context2D.translate(this.position.x, this.position.y);
            context2D.rotate(this.rotation);
            behaviors.draw(context2D);
            children.draw(context2D);
            context2D.restore();
        };
    }

    return GameObject;
});