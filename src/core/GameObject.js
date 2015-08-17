define(['util/Composite', 'math/Vector', 'behaviors/Collider'], function (Composite, Vector, Collider) {
    function GameObject() {
        this.scale = new Vector(1, 1);
        this.position = new Vector();
        this.rotation = 0;
        this.parent = null;
        this.visible = true;
        this.active = true;

        var children = new Composite('start', 'draw', 'update');
        var behaviors = new Composite('start', 'draw', 'update', 'onCollision');
        var colliders = new Composite();

        this.getColliders = function () {
            return colliders;
        };

        this.addChild = function (child) {
            child.parent = this;
            children.add(child);
        };

        this.removeChild = function (child) {
            if (children.remove(child))
                child.parent = null;
        };

        this.forEachChild = function(visit){
            for(var i = 0; i < children.length; i++){
                children[i].forEachChild(visit);
                visit(children[i]);
            }
        };

        this.addBehavior = function (behavior) {
            if (behavior instanceof Collider)
                colliders.add(behavior);
            behavior.gameObject = this;
            behaviors.add(behavior);
        };

        this.removeBehavior = function (behavior) {
            if (behaviors.remove(behavior)) {
                behavior.parent = null;
                if (behavior instanceof Collider)
                    colliders.remove(behavior);
            }
        };

        this.start = function () {
            behaviors.start();
            children.start();
        };

        this.update = function (delta) {
            if (!this.active)
                return;
            behaviors.update(delta);
            children.update(delta);
        };

        this.draw = function (context2D) {
            if (!this.visible)
                return;
            context2D.save();
            context2D.translate(Math.floor(this.position.x), -Math.floor(this.position.y));
            context2D.rotate(this.rotation);
            context2D.scale(this.scale.x, this.scale.y);
            behaviors.draw(context2D);
            children.draw(context2D);
            context2D.restore();
        };

        this.onCollision = function (collider) {
            if (!this.active)
                return;
            behaviors.onCollision(collider);
        };
    }

    GameObject.prototype.getGlobalPosition = function(){
        var nextParent = this.parent;
        var absolutePosition = this.position;
        while(nextParent !== null){
            if(nextParent.position === undefined)
                console.log(nextParent);
            absolutePosition = absolutePosition.sum(nextParent.position);
            nextParent = nextParent.parent;
        }
        return absolutePosition;
    };

    return GameObject;
});