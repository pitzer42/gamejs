define(['math/Vector', 'math/Transform', 'math/Segment'], function (Vector, Transform, Segment) {
    function Circle(x, y, radius) {
        this.transform = new Transform();
        if(arguments.length === 2 && arguments[0] instanceof Vector){
            this.transform.position = arguments[0];
            this.radius = arguments[1];
        }else if(arguments.length === 1){
            this.radius = arguments[0];
        }else{
            this.transform.position = new Vector(x, y);
            this.radius = radius || 1;
        }
    }

    /*

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
        return circle.position.distance(point) < circle.radius;
    }

    function intersectsSegment(circle, segment) {
        var aToCenter = circle.position.subtract(segment.a);
        var projectionLength = aToCenter.dot(segment.direction());
        if (projectionLength < 0)
            return null;
        if (projectionLength > segment.length())
            return null;
        var closest = segment.a.sum(segment.direction().scale(projectionLength));
        return circle.position.distance(closest) < circle.radius;
    }

    function intersectsCircle(a, b) {
        return a.position.distance(b.position) < (a.radius + b.radius);
    }
    */

    Circle.prototype.draw = function (context) {
        context.beginPath();
        context.arc(0, 0, this.radius, 0, 2 * Math.PI, false);
        context.stroke();
    }

    return Circle;
});