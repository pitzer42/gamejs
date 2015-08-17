define(['math/Vector'], function (Vector) {
    function Circle(x, y, radius) {
        this.x = x || 0;
        this.y = y || 0;
        this.radius = radius || 1;
    }

    Circle.prototype.intersects = function (other) {
        if (other instanceof Circle)
            return intersectsCircle(this, other);
        if(other instanceof Vector)
            return containsPoint(this, other);
        return false;
    };

    function intersectsCircle(a, b) {
        var aPosition = new Vector(a.x, a.y);
        var bPosition = new Vector(b.x, b.y);
        return aPosition.distance(bPosition) < (a.radius + b.radius);
    }

    function containsPoint(circle, point){
        var circleCenter = new Vector(circle.x, circle.y);
        return circleCenter.distance(point) < circle.radius;
    }

    return Circle;
});