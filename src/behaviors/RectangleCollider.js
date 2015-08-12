define(['behaviors/Collider'], function (Collider) {
    function RectangleCollider(width, height) {
        Collider.call(this);
        this.width = width;
        this.height = height;
    }

    RectangleCollider.prototype = new Collider();

    RectangleCollider.prototype.collides = function (other) {
        return ((this.gameObject.position.y + this.height >= other.gameObject.position.y) &&
        (this.gameObject.position.y <= other.gameObject.position.y + other.height) &&
        (this.gameObject.position.x <= other.gameObject.position.x + other.width) &&
        (this.gameObject.position.x + this.width >= other.gameObject.position.x));
    };

    return RectangleCollider;
});