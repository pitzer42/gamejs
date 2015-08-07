define([], function () {
    function Vector2(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    Vector2.prototype.scale = function (factor) {
        return new Vector2(this.x * factor, this.y * factor);
    };

    Vector2.prototype.sum = function (other) {
        return new Vector2(this.x + other.x, this.y + other.y);
    };

    Vector2.prototype.subtract = function (other) {
        return new Vector2(this.x - other.x, this.y - other.y);
    };

    Vector2.prototype.inverse = function () {
        return new Vector2(-this.x, -this.y);
    };

    return Vector2;
});