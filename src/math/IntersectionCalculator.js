define(['math/Vector', 'math/Circle', 'math/Rectangle'], function(Vector, Circle, Rectangle){

    function intersects(a, b){


    }

    function circleContainsPoint(circle, point){
        var circleCenter = new Vector(circle.x, circle.y);
        return circleCenter.distance(point) < circle.radius;
    }

    function pointBelongsToCircle(point, circle){
        return circleContainsPoint(circle, point);
    }

    function circleIntersectsCircle(a, b){
        var aCenter = new Vector(a.x, a.y);
        var bCenter = new Vector(b.x, b.y);
        return aCenter.distance(bCenter) < a.radius + b.radius;
    }

    function circleIntersectsRectangle(circle, rect){
        var bottomLeft = new Vector(rect.x, rect.y);
        var bottomRight = new Vector(rect.x, rect.right());
        var topLeft = new Vector(rect.x, rect.top());
        var topRight = new Vector(rect.top(), rect.right());
        return circle.intersects(bottomLeft) || circle.intersects(bottomRight) || circle.intersects(topLeft) || circle.intersects(topRight);
    }

    function rectangleIntersectsCircle(rect, circle){
        return circleIntersectsRectangle(circle, rect);
    }

    function rectangle
});