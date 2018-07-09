define(['math/Vector', 'math/Segment', 'math/Circle'], function (Vector, Segment, Circle) {
    describe('Circle', function () {
        it('is defined by a transform and radius', function () {
            var circle = new Circle();
            expect(circle.transform).toBeDefined();
            expect(circle.radius).toBeDefined();
        });

        it('is at origin and has radius 1 by default ', function(){
            var circle = new Circle();
            var origin = new Vector();
            expect(circle.transform.position.equals(origin)).toBeTruthy();
            expect(circle.radius).toBe(1);
        });

        it('can be created from a point a radius', function(){
            var center = new Vector(1,2);
            var circle = new Circle(center,3);
            expect(circle.transform.position.equals(center)).toBeTruthy();
            expect(circle.radius).toBe(3);
        });

        it('can be created from x and y coordinates and a radius', function(){
            var circle = new Circle(1,2,3);
            var expectPosition = new Vector(1,2);
            expect(circle.transform.position.equals(expectPosition)).toBeTruthy();
            expect(circle.radius).toBe(3);
        });


        /*

        it('can intersect a point', function () {
            var circle = new Circle();
            var point = new Vector();
            expect(circle.intersects(point)).toBeTruthy();
            point = new Vector(123, 456);
        });

        it('can intersect a segment', function () {
            var circle = new Circle(0, 0, 2);
            var segment = new Segment(-3, 0, 3, 0);
            expect(circle.intersects(segment)).toBeTruthy();
            segment = new Segment(3, 0, 4, 0);
            expect(circle.intersects(segment)).toBeFalsy();
        });

        it('can intersect another circle', function () {
            var a = new Circle(0, 0, 2);
            var b = new Circle(1, 1, 2);
            expect(a.intersects(b)).toBeTruthy();
        });

        */
    });
});