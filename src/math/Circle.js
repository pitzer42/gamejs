define(['math/Vector', 'math/Segment'], function (Vector, Segment) {
    function Circle(x, y, radius) {
        this.x = x || 0;
        this.y = y || 0;
        this.radius = radius || 1;
    }

    Circle.prototype.intersects = function (other) {
        if (other instanceof Vector)
            return containsPoint(this, other);
        if (other instanceof Segment)
            return intersectsSegment(this, other);
        if (other instanceof Circle)
            return intersectsCircle(this, other);
        return false;
    };

    function containsPoint(circle, point) {
        var circleCenter = new Vector(circle.x, circle.y);
        return circleCenter.distance(point) < circle.radius;
    }

    function intersectsSegment(circle, segment) {
        var distance = ((segment.b.y - segment.a.y) * circle.x) - ((segment.b.x - segment.a.x) * circle.y) + (segment.b.x * segment.a.y) - (segment.b.y * segment.a.x);
        distance = Math.abs(distance) / segment.length();
        return distance < circle.radius;
    }

    function intersectsCircle(a, b) {
        var aPosition = new Vector(a.x, a.y);
        var bPosition = new Vector(b.x, b.y);
        return aPosition.distance(bPosition) < (a.radius + b.radius);
    }

    Circle.prototype.draw = function (context2D) {
        context2D.save();
        context2D.beginPath();
        context2D.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        context2D.stroke();
        context2D.restore();
    }

    return Circle;
});