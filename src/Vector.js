define(function () {
    function Vector(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    Vector.prototype.scale = function (factor) {
        return new Vector(this.x * factor, this.y * factor);
    };

    Vector.prototype.sum = function (other) {
        return new Vector(this.x + other.x, this.y + other.y);
    };

    Vector.prototype.subtract = function (other) {
        return new Vector(this.x - other.x, this.y - other.y);
    };

    Vector.prototype.inverse = function () {
        return new Vector(-this.x, -this.y);
    };

    return Vector;
});