define(['math/Vector', 'math/Transform', 'math/Segment', 'math/Circle'], function (Vector, Transform, Segment, Circle) {
    function Rectangle(x, y, width, height, rotation) {
        this.transform = new Transform();
        this.transform.position.x = x;
        this.transform.position.y = y;
        this.transform.rotation = rotation || 0;
        this.width = width || 1;
        this.height = height || 1;
    }

    Rectangle.prototype.getEdges = function () {
        return [new Segment(this.position, this.bottomRight()),
            new Segment(this.position, this.topLeft()),
            new Segment(this.topLeft(), this.topRight()),
            new Segment(this.topRight(), this.bottomRight())];
    };

    Rectangle.prototype.bottomRight = function () {
        var point = new Vector(this.position.x + this.width, this.position.y);
        return point.setRotate(this.rotation, this.position);
    };

    Rectangle.prototype.topLeft = function () {
        var point = new Vector(this.position.x, this.position.y + this.height);
        return point.setRotate(this.rotation, this.position);
    };

    Rectangle.prototype.topRight = function () {
        var point = new Vector(this.position.x + this.width, this.position.y + this.height);
        return point.setRotate(this.rotation, this.position);
    };

    Rectangle.prototype.intersects = function (other) {
        if (other instanceof Vector)
            return containsPoint(this, other);
        if (other instanceof Segment)
            return intersectsSegment(this, other);
        if (other instanceof Circle)
            return intersectsCircle(this, other);
        if (other instanceof Rectangle)
            return intersectsRectangle(this, other);
        return false;
    };

    function containsPoint(rect, point) {
        point = point.rotate(-rect.rotation);
        var right = rect.position.x + rect.width;
        var top = rect.position.y + rect.height;
        return (rect.position.x < point.x && point.x < right) && (rect.position.y < point.y && point.y < top);
    }

    function intersectsSegment(rect, segment) {
        var contains = containsPoint(rect, segment.a) || containsPoint(rect, segment.b);
        if (contains)
            return true;
        var edges = rect.getEdges();
        for (var i = 0; i < edges.length; i++)
            if (segment.intersects(edges[i]))
                return true;
        return false;
    }

    function intersectsCircle(rect, circle) {
        var contains = containsPoint(rect, circle.position);
        if (contains)
            return true;
        var edges = rect.getEdges();
        for (var i = 0; i < edges.length; i++)
            if (circle.intersects(edges[i]))
                return true;
        return false;
    }

    function intersectsRectangle(a, b) {
        return containsPoint(a, b.position) || containsPoint(a, b.bottomRight()) || containsPoint(a, b.topLeft()) || containsPoint(a, b.topRight());
    }

    Rectangle.prototype.draw = function (context2D) {
        context2D.save();
        context2D.beginPath();
        context2D.rotate(this.rotation);
        context2D.rect(this.x, this.y, this.width, this.height);
        context2D.stroke();
        context2D.restore();
    }

    return Rectangle;
});