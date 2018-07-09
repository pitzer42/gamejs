define(['util/Composite', 'math/Vector', 'math/Transform', 'behaviors/Collider', 'behaviors/CollisionDetector'], function (Composite, Vector, Transform, Collider, CollisionDetector) {
    function GameObject(behavior) {
        this.transform = new Transform();
        this.parent = null;
        this.visible = true;
        this.active = true;
        this.collider = null;
        this.collisionDetector = null;

        var engine = null;
        var children = new Composite('start', 'draw', 'update');
        var behaviors = new Composite('start', 'draw', 'update', 'onCollision');

        this.add = function (component) {
            if (component instanceof GameObject)
                addChild.call(this, component);
            else if(component instanceof Collider)
                setCollider.call(this, component);
            else if(component instanceof CollisionDetector)
                setCollisionDetector.call(this, component);
            else
                addBehavior.call(this, component);
            if(engine)
                component.start(engine);
        };

        function addChild(child) {
            child.parent = this;
            child.transform.parent = this.transform;
            children.add(child);
        }

        function setCollider(collider){
            this.collider = collider;
            addBehavior.call(this, collider);
        }

        function setCollisionDetector(detector){
            this.collisionDetector = detector;
            addBehavior.call(this, detector);
        }

        function addBehavior(behavior) {
            behavior.gameObject = this;
            behavior.transform = this.transform;
            behaviors.add(behavior);
        }

        this.remove = function (component) {
            if (component instanceof GameObject)
                removeChild.call(this, component);
            else if(component instanceof Collider)
                removeCollider.call(this, component);
            else if(component instanceof CollisionDetector)
                removeCollisionDetector.call(this, component);
            else
                removeBehavior.call(this, component);
        };

        function removeChild(child) {
            if (children.remove(child)) {
                child.parent = null;
                child.transform = null;
            }
        }

        function removeCollider(collider){
            if(removeBehavior.call(this, collider))
                this.collider = null;
        }

        function removeCollisionDetector(detector){
            if(removeBehavior.call(this, detector))
                this.collisionDetector = null;
        }

        function removeBehavior(behavior) {
            if (behaviors.remove(behavior)) {
                behavior.gameObject = null;
                behavior.transform = null;
            }
        }

        this.forEachChild = function (visit) {
            for (var i = 0; i < children.length; i++) {
                children[i].forEachChild(visit);
                if(visit(children[i]))
                    return;
            }
        };

        this.forEachBehavior = function(visit){
            for(var i = 0; i < behavior.length; i++)
                if(visit(behavior[i]))
                    return;
        };

        this.forEachParent = function(visit){
            var next = this.parent;
            while(next){
                if(visit(next))
                    return;
                next = next.parent;
            }
        }

        this.start = function (engine) {
            engine = engine;
            behaviors.start(engine);
            children.start(engine);
        };

        this.update = function (delta) {
            if (!this.active)
                return;
            behaviors.update(delta);
            children.update(delta);
        };

        this.draw = function (context) {
            if (!this.visible)
                return;

            context.save();
            this.transform.applyTo(context);
            behaviors.draw(context);
            context.restore();

            context.save();
            this.transform.applyTo(context);
            children.draw(context);
            context.restore();
        };

        this.onCollision = function (collider) {
            if (!this.active)
                return;
            behaviors.onCollision(collider);
        };

        if(behavior)
            this.add(behavior);
    }

    return GameObject;
});