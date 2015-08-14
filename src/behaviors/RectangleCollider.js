define(['behaviors/Collider'], function (Collider) {
    function RectangleCollider(width, height) {
        Collider.call(this);
        this.width = width;
        this.height = height;
    }

    RectangleCollider.prototype = new Collider();

    RectangleCollider.prototype.collides = function (other) {
        var thisPosition = this.gameObject.getGlobalPosition();
        var otherPosition = other.gameObject.getGlobalPosition();

        var thisLeft = thisPosition.x;
        var thisRight = thisPosition.x + this.width;
        var thisBottom = thisPosition.y;
        var thisTop = thisPosition.y + this.height;

        var otherLeft = otherPosition.x;
        var otherRight = otherPosition.x + other.width;
        var otherBottom = otherPosition.y;
        var otherTop = otherPosition.y + other.height;

        return (thisRight > otherLeft) && (thisLeft < otherRight) && (thisTop > otherBottom) && (thisBottom < otherTop);

        /*return ((this.gameObject.position.y + this.height >= other.gameObject.position.y) &&
        (this.gameObject.position.y <= other.gameObject.position.y + other.height) &&
        (this.gameObject.position.x <= other.gameObject.position.x + other.width) &&
        (this.gameObject.position.x + this.width >= other.gameObject.position.x));
        */
    };

    return RectangleCollider;
});