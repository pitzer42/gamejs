define(['math/Circle', 'math/Vector'], function (Circle, Vector) {
    function Rectangle(x, y, width, height) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 1;
        this.height = height || 1;

        function intersectsRectangle(other){
            return (this.right() > other.x) && (this.x < other.right()) && (this.top() > other.y) && (this.y < other.top());
        }

        function intersectsCircle(circle){
            var bottomLeft = new Vector(this.x, this.y);
            var bottomRight = new Vector(this.x, this.right());
            var topLeft = new Vector(this.x, this.top());
            var topRight = new Vector(this.top(), this.right());
            return circle.intersects(bottomLeft) || circle.intersects(bottomRight) || circle.intersects(topLeft) || circle.intersects(topRight);
        }

        this.intersects = function(other){
            if (other instanceof Rectangle)
                return intersectsRectangle.call(this, other);
            if(other instanceof Circle)
                return intersectsCircle.call(this, other);
            return false;
        };
    }

    Rectangle.prototype.right = function () {
        return this.x + this.width;
    };

    Rectangle.prototype.top = function () {
        return this.y + this.height;
    };

    return Rectangle;
});