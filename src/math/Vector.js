define(function () {
    function Vector(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    Vector.prototype.translate = function (other) {
        this.x = other.x;
        this.y = other.y;
        return this;
    };

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

    Vector.prototype.rotate = function (radians, pivot) {
        pivot = pivot || new Vector();
        var pivoted = this.subtract(pivot);
        var result = new Vector();
        result.x = pivoted.x * Math.cos(radians) - pivoted.y * Math.sin(radians);
        result.y = pivoted.x * Math.sin(radians) + pivoted.y * Math.cos(radians);
        return result.sum(pivot);
    };

    Vector.prototype.magnitude = function () {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    };

    Vector.prototype.distance = function(other){
        return this.subtract(other).magnitude();
    };

    Vector.prototype.toString = function () {
        return '(' + this.x + ', ' + this.y + ')';
    };

    return Vector;
});