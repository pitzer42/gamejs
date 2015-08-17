define(['math/Circle', 'math/Vector'], function (Circle, Vector) {
    function Rectangle(x, y, width, height, rotation) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 1;
        this.height = height || width;
        this.rotation = rotation || 0;
    }

    Rectangle.prototype.bottomLeft = function () {
        return new Vector(this.x, this.y);
    };

    Rectangle.prototype.bottomRight = function () {
        var point = new Vector(this.x + this.width, this.y);
        return point.rotate(this.rotation, this.bottomLeft());
    };

    Rectangle.prototype.topLeft = function () {
        var point = new Vector(this.x, this.y + this.height);
        return point.rotate(this.rotation, this.bottomLeft());
    };

    Rectangle.prototype.topRight = function () {
        var point = new Vector(this.x + this.width, this.y + this.height);
        return point.rotate(this.rotation, this.bottomLeft());
    };

    Rectangle.prototype.intersects = function (other) {
        if (other instanceof Vector)
            return containsPoint(this, other);
        if (other instanceof Rectangle)
            return intersectsRectangle(this, other);
        if (other instanceof Circle)
            return intersectsCircle(this, other);
        return false;
    };

    function containsPoint(rect, point) {
        point = point.rotate(-this.rotation);
        var right = rect.x + rect.width;
        var top = rect.y + rect.height;
        return (rect.x < point.x && point.x < right) && (rect.y < point.y && point.y < top);
    }

    function intersectsRectangle(a, b) {
        var OriginalRotation = b.rotation;
        b.rotation -= a.rotation;
        var intersects = containsPoint(a, b.bottomLeft()) || containsPoint(a, b.bottomRight()) || containsPoint(a, b.topLeft()) || containsPoint(a, b.topRight());
        b.rotation = OriginalRotation;
        return intersects;
    }

    function intersectsCircle(rect, circle) {
        return circle.intersects(rect.bottomLeft()) || circle.intersects(rect.bottomRight()) || circle.intersects(rect.topLeft()) || circle.intersects(rect.topRight());
    }

    return Rectangle;
});