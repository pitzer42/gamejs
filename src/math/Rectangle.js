define(['math/Circle', 'math/Vector'], function (Circle, Vector) {
    function Rectangle(x, y, width, height) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 1;
        this.height = height || 1;
    }

    Rectangle.prototype.right = function () {
        return this.x + this.width;
    };

    Rectangle.prototype.top = function () {
        return this.y + this.height;
    };

    Rectangle.prototype.intersects = function(other){
        if (other instanceof Rectangle)
            return intersectsRectangle(this, other);
        if(other instanceof Circle)
            return intersectsCircle(this, other);
        return false;
    };

    function intersectsRectangle(a, b){
        return (a.right() > b.x) && (a.x < b.right()) && (a.top() > b.y) && (a.y < b.top());
    }

    function intersectsCircle(a, b){
        var bottomLeft = new Vector(a.x, a.y);
        var bottomRight = new Vector(a.x, a.right());
        var topLeft = new Vector(a.x, a.top());
        var topRight = new Vector(a.top(), a.right());
        return b.intersects(bottomLeft) || b.intersects(bottomRight) || b.intersects(topLeft) || b.intersects(topRight);
    }

    return Rectangle;
});