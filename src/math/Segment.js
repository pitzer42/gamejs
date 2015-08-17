define(['math/Vector'], function (Vector) {
    function Segment(a, b) {
        if (arguments.length == 4) {
            a = new Vector(arguments[0], arguments[1]);
            b = new Vector(arguments[2], arguments[3]);
        }
        this.a = a;
        this.b = b;
    }

    Segment.prototype.direction = function () {
        return this.b.subtract(this.a).normalize();
    };

    Segment.prototype.at = function (t) {
        return this.b.subtract(this.a).setScale(t).setSum(this.a);
    };

    Segment.prototype.middlePoint = function () {
        return this.at(0.5);
    };

    Segment.prototype.intersects = function (other) {
        //Parallels or collinears
        var epsilon = 0.000001;
        var alphaCos = this.direction().dot(other.direction());
        if (1 - Math.abs(alphaCos) < epsilon)
            return null;

        //sharing extremes
        if (this.a.equals(other.a) || this.a.equals(other.b))
            return new Vector(this.a);
        if (this.b.equals(other.a) || this.b.equals(other.b))
            return new Vector(this.b);

        var t = 0;

        var denominator = -this.a.x + this.b.x - other.b.x + other.a.x;
        if (denominator !== 0) {
            t = (other.a.x - this.a.x) / denominator;
            return this.at(t);
        }

        var denominator = -this.a.y + this.b.y - other.b.y + other.a.y;
        if (denominator !== 0) {
            t = (other.a.y - this.a.y) / denominator;
            var intersection = this.at(t);
            if (intersection.equals(other.at(t)))
                return intersection;
        }

        return null;
    };

    Segment.prototype.draw = function (context2D) {
        context2D.beginPath();
        context2D.moveTo(this.a.x, -this.a.y);
        context2D.lineTo(this.b.x, -this.b.y);
        context2D.stroke();
    };

    return Segment;
});