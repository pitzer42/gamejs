define(function () {
    function Vector(x, y) {
        if (arguments.length === 1 && arguments[0] instanceof Vector) {
            this.x = arguments[0].x;
            this.y = arguments[0].y;
        } else {
            this.x = x || 0;
            this.y = y || 0;
        }
    }

    Vector.prototype.translate = function (other) {
        this.x = other.x;
        this.y = other.y;
        return this;
    };

    Vector.prototype.scale = function (factor) {
        return new Vector(this).setScale(factor);
    };

    Vector.prototype.setScale = function (factor) {
        this.x *= factor;
        this.y *= factor;
        return this;
    };

    Vector.prototype.sum = function (other) {
        return new Vector(this).setSum(other);
    };

    Vector.prototype.setSum = function (other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    };

    Vector.prototype.subtract = function (other) {
        return new Vector(this).setSubtract(other);
    };

    Vector.prototype.setSubtract = function (other) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    };

    Vector.prototype.inverse = function () {
        return new Vector(this).setInverse();
    };

    Vector.prototype.setInverse = function () {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    };

    Vector.prototype.rotate = function (radians, pivot) {
        return new Vector(this).setRotate(radians, pivot);
    };

    Vector.prototype.setRotate = function (radians, pivot) {
        pivot = pivot || new Vector();
        this.setSubtract(pivot);
        var x = this.x;
        var y = this.y;
        this.x = x * Math.cos(radians) - y * Math.sin(radians);
        this.y = x * Math.sin(radians) + y * Math.cos(radians);
        return this.setSum(pivot);
    };

    Vector.prototype.magnitude = function () {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    };

    Vector.prototype.distance = function (other) {
        return this.subtract(other).magnitude();
    };

    Vector.prototype.normalize = function () {
        return new Vector(this).setNormalize();
    };

    Vector.prototype.setNormalize = function () {
        return this.setScale(1 / this.magnitude());
    }

    Vector.prototype.dot = function (other) {
        return (this.x * other.x) + (this.y * other.y);
    };

    Vector.prototype.angle = function (other) {
        return Math.acos(this.normalize().dot(other.normalize()));
    }

    /**
     * Cross or vector product. Assumes 2D Vectors to be on the XY plane.
     *
     * @param other
     * @returns {number} Z Coordinate of the cross product.
     */
    Vector.prototype.cross = function (other) {
        return (this.x * other.y) - (this.y * other.x);
    };

    Vector.prototype.equals = function (other) {
        if (other instanceof Vector)
            return other.x === this.x && other.y === this.y;
        return false;
    }

    Vector.prototype.toString = function () {
        return '(' + this.x + ', ' + this.y + ')';
    };

    Vector.prototype.draw = function (context2D) {
        context2D.save();
        context2D.beginPath();
        context2D.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
        context2D.fill();
        context2D.stroke();
        context2D.restore();
    };

    return Vector;
})
;