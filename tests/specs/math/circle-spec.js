define(['math/Vector', 'math/Segment', 'math/Circle'], function (Vector, Segment, Circle) {
    describe('Circle', function () {

        it('is defined by a point and radius', function () {
            var circle = new Circle();
            expect(circle.position).toBeDefined();
            expect(circle.radius).toBeDefined();
        });

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
    });
});