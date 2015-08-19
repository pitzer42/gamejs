define(function () {
    function Collider(shape) {
        this.shape = shape;
    }

    Collider.prototype.start = function () {
        var next = this.gameObject;
        while (next != null) {
            if (next.collisionDetector) {
                next.collisionDetector.registerCollider(this);
                next = null;
            } else
                next = next.parent;
        }
    };

    Collider.prototype.collides = function (other) {
        var thisPosition = this.gameObject.getGlobalPosition();
        var otherPosition = other.gameObject.getGlobalPosition();

        this.shape.position.setSum(thisPosition);
        other.shape.position.setSum(otherPosition);

        var result = this.shape.intersects(other.shape) || other.shape.intersects(this.shape);

        this.shape.position.setSubtract(thisPosition);
        other.shape.position.setSubtract(otherPosition);

        return result;
    };

    return Collider;
});