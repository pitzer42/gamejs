define(function () {
    function Vector(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    Vector.prototype.translate = function (other) {
        this.x = other.x;
        this.y = other.y;
        return this;
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

    Vector.prototype.magnitude = function () {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    };

    Vector.prototype.toString = function () {
        return '(' + this.x + ', ' + this.y + ')';
    }

    Vector.distance = function (a, b) {
        return a.subtract(b).magnitude();
    };

    return Vector;
});