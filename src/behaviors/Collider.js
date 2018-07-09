define(function () {
    function Collider(shape) {
        this.shape = shape;

        this.draw = this.shape.draw.bind(this.shape);
    }

    Collider.prototype.start = function () {
        this.shape.transform.parent = this.transform;
        var collider = this;
        this.gameObject.forEachParent(function (parent) {
            if (parent.collisionDetector) {
                parent.collisionDetector.addCollider(collider);
                return true;
            }
        });
    };

    Collider.prototype.collides = function (other) {
        var thisTransform = this.shape.transform;
        var otherTransform = other.shape.transform;
        this.shape.transform = this.shape.transform.getGlobal();
        other.shape.transform = other.shape.transform.getGlobal();

        var collision = false;
        var vertices = other.shape.getVertices();
        for (var i = 0; i < vertices.length; i++) {
            if (this.shape.contains(vertices[i])) {
                collision = true;
                break;
            }
        }
        if (!collision) {
            vertices = this.shape.getVertices();
            for (var i = 0; i < vertices.length; i++) {
                if (other.shape.contains(vertices[i])) {
                    collision = true;
                    break;
                }
            }
        }

        this.shape.transform = thisTransform;
        other.shape.transform = otherTransform;
        return collision;
    };

    return Collider;
});