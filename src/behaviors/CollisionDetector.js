define(['util/Composite', 'behaviors/Collider'], function (Composite, Collider) {
    function CollisionDetector() {
        var colliders = new Composite();

        this.registerCollider = colliders.add.bind(colliders);

        this.unregisterCollider = colliders.remove.bind(colliders);

        this.update = function () {
            for (var i = 0; i + 1 < colliders.length; i++) {
                var a = colliders[i];
                for (var j = i + 1; j < colliders.length; j++) {
                    var b = colliders[j];
                    if (a.collides(b)) {
                        a.gameObject.onCollision(b);
                        b.gameObject.onCollision(a);
                    }
                }
            }
        };
    }

    return CollisionDetector;

});