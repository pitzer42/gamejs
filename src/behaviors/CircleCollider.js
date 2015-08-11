define(['math/Vector'], function (Vector) {
    function CircleCollider(radius) {
        this.radius = radius;
    }

    CircleCollider.prototype.collides = function (other) {
        var distance = Vector.distance(this.position, other.position);
        return distance <= this.radius + other.radius;
    };

    return CircleCollider;
});