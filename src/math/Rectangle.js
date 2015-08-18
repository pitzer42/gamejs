define(['math/Vector', 'math/Segment', 'math/Circle'], function (Vector, Segment, Circle) {
    function Rectangle(x, y, width, height, rotation) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 1;
        this.height = height || 1;
        this.rotation = rotation || 0;
    }

    Rectangle.prototype.bottomLeft = function () {
        return new Vector(this.x, this.y);
    };

    Rectangle.prototype.bottomRight = function () {
        var point = new Vector(this.x + this.width, this.y);
        return point.setRotate(this.rotation, this.bottomLeft());
    };

    Rectangle.prototype.topLeft = function () {
        var point = new Vector(this.x, this.y + this.height);
        return point.setRotate(this.rotation, this.bottomLeft());
    };

    Rectangle.prototype.topRight = function () {
        var point = new Vector(this.x + this.width, this.y + this.height);
        return point.setRotate(this.rotation, this.bottomLeft());
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
        var right = rect.x + rect.width;
        var top = rect.y + rect.height;
        return (rect.x < point.x && point.x < right) && (rect.y < point.y && point.y < top);
    }

    function intersectsSegment(rect, segment){
        var contains = containsPoint(rect, segment.a) || containsPoint(rect, segment.b);
        if(!contains){
            var rectSegment = new Segment(rect.bottomLeft(), rect.topLeft());
            if(rectSegment.intersects(segment))
                return true;
            rectSegment = new Segment(rect.bottomRight(), rect.topRight());
            if(rectSegment.intersects(segment))
                return true;
            rectSegment = new Segment(rect.bottomLeft(), rect.bottomRight());
            if(rectSegment.intersects(segment))
                return true;
            rectSegment = new Segment(rect.topLeft(), rect.topRight());
            if(rectSegment.intersects(segment))
                return true;
            return false;
        }
        return true;
    }

    function intersectsCircle(rect, circle) {
        return circle.intersects(rect.bottomLeft()) || circle.intersects(rect.bottomRight()) || circle.intersects(rect.topLeft()) || circle.intersects(rect.topRight());
    }

    function intersectsRectangle(a, b) {
        return containsPoint(a, b.bottomLeft()) || containsPoint(a, b.bottomRight()) || containsPoint(a, b.topLeft()) || containsPoint(a, b.topRight());
    }

    Rectangle.prototype.draw = function (context2D) {
        context2D.save();
        context2D.beginPath();
        context2D.rotate(this.rotation);
        context2D.rect(this.x, -this.y, this.width, -this.height);
        context2D.stroke();
        context2D.restore();
    }

    return Rectangle;
});