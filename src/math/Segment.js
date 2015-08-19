define(['math/Vector'], function (Vector) {
    function Segment(a, b) {
        if (arguments.length == 4) {
            a = new Vector(arguments[0], arguments[1]);
            b = new Vector(arguments[2], arguments[3]);
        }
        this.position = this.a = a;
        this.b = b;
    }

    Segment.prototype.intersects = function (other) {
        if (other instanceof Vector)
            return containsPoint(this, other);
        if (other instanceof Segment)
            return intersectsSegment(this, other);
        return false;
    }

    function containsPoint(segment, point) {
        var t = (point.x - segment.a.x) / (segment.b.x - segment.a.x);
        if (t < 0 || t > 1)
            return false;
        var y = segment.a.y + t * (segment.b.y - segment.a.y);
        return point.y === y;
    }

    function intersectsSegment(segment, other) {
        //parallels or collinears
        var epsilon = 0.000001;
        var alphaCos = segment.direction().dot(other.direction());
        if (1 - Math.abs(alphaCos) < epsilon)
            return null;

        //sharing extremes
        if (segment.a.equals(other.a) || segment.a.equals(other.b))
            return new Vector(segment.a);
        if (segment.b.equals(other.a) || segment.b.equals(other.b))
            return new Vector(segment.b);

        var t = 0;
        var denominator = -segment.a.x + segment.b.x - other.b.x + other.a.x;
        if (denominator !== 0) {
            t = (other.a.x - segment.a.x) / denominator;
            return segment.at(t);
        }
        denominator = -segment.a.y + segment.b.y - other.b.y + other.a.y;
        if (denominator !== 0) {
            t = (other.a.y - segment.a.y) / denominator;
            var intersection = segment.at(t);
            if (intersection.equals(other.at(t)))
                return intersection;
        }

        return null;
    };

    Segment.prototype.length = function () {
        return this.b.distance(this.a);
    };

    Segment.prototype.direction = function () {
        return this.b.subtract(this.a).normalize();
    };

    Segment.prototype.at = function (t) {
        return this.b.subtract(this.a).setScale(t).setSum(this.a);
    };

    Segment.prototype.middlePoint = function () {
        return this.at(0.5);
    };

    Segment.prototype.draw = function (context2D) {
        context2D.save();
        context2D.beginPath();
        context2D.moveTo(this.a.x, this.a.y);
        context2D.lineTo(this.b.x, this.b.y);
        context2D.stroke();
        context2D.restore();
    };

    return Segment;
});