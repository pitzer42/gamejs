define(['math/Vector', 'math/Transform'], function (Vector, Transform) {
    function Triangle(a, b, c) {
        function sameSide(p1, p2, l1, l2) {
            var v = l2.subtract(l1);
            var cross1 = v.cross(p1.subtract(l1));
            var cross2 = v.cross(p2.subtract(l1));
            return cross1 * cross2 >= 0;
        }

        this.contains = function (point) {
            var a2 = this.transform.position.sum(a);
            var b2 = this.transform.position.sum(b);
            var c2 = this.transform.position.sum(c);
            return sameSide(point, a2, b2, c2) && sameSide(point, b2, a2, c2) && sameSide(point, c2, a2, b2);
        };

        this.draw = function (context) {
            //context.save();
            context.beginPath();
            //this.transform.applyTo(context);
            context.lineTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.lineTo(c.x, c.y);
            context.lineTo(a.x, a.y);
            context.stroke();
            //context.restore();
        }
    }

    function Polygon(vertices) {
        this.transform = new Transform();

        var triangles = [];
        var a = vertices[0];
        var b = vertices[1];
        var c = null;
        for (var i = 2; i < vertices.length; i++) {
            c = vertices[i];
            triangles.push(new Triangle(a, b, c));
            b = c;
        }

        this.contains = function (point) {
            for (var i = 0; i < triangles.length; i++) {
                triangles[i].transform = this.transform;
                if (triangles[i].contains(point))
                    return true;
            }
            return false;
        };

        this.getVertices = function () {
            var vertex = null;
            var transformedVertices = [];
            for (var i = 0; i < vertices.length; i++) {
                vertex = new Vector(vertices[i]);
                vertex.setSum(this.transform.position);
                vertex.setRotate(this.transform.rotation);
                transformedVertices.push(vertex);
            }
            return transformedVertices;
        };

        this.draw = function (context) {
            for (var i = 0; i < triangles.length; i++)
                triangles[i].draw(context);
        };
    }

    return Polygon;
});