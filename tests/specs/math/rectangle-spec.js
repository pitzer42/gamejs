define(['math/Vector', 'math/Segment', 'math/Circle', 'math/Rectangle'], function (Vector, Segment, Circle, Rectangle) {
    describe('Rectangle', function () {
        it('is defined by x and y coordinates, width and height', function () {
            var rect = new Rectangle();
            expect(rect.x).toBeDefined();
            expect(rect.y).toBeDefined();
            expect(rect.width).toBeDefined();
            expect(rect.height).toBeDefined();
        });

        it('can intersect a point', function () {
            var rect = new Rectangle(-1, -1, 2, 2);
            var point = new Vector();
            expect(rect.intersects(point)).toBeTruthy();
        });

        it('can intersect a segment', function () {
            var rect = new Rectangle(0, 0, 3, 3);
            var segment = new Segment(1, 1, 2, 2);
            expect(rect.intersects(segment)).toBeTruthy();
            var segment = new Segment(1, 1, 123, 456);
            expect(rect.intersects(segment)).toBeTruthy();
            var segment = new Segment(1, -100, 2, 100);
            expect(rect.intersects(segment)).toBeTruthy();
            var segment = new Segment(-100, 2, 100, 2);
            expect(rect.intersects(segment)).toBeTruthy();
        });

        it('can intersect a circle', function () {
            var rect = new Rectangle();
            var circle = new Circle();
            expect(rect.intersects(circle)).toBeTruthy();
        });

        it('can intersect another rectangle', function () {
            var a = new Rectangle(0, 0, 2, 2);
            var b = new Rectangle(1, 1, 2, 2);
            expect(a.intersects(b)).toBeTruthy();
        });

        it('can intersect another rectangle, even rotated', function () {
            var a = new Rectangle(0, 0, 2, 2);
            var b = new Rectangle(1, 2, 2, 2);
            a.rotation = Math.PI / 16;
            expect(a.intersects(b)).toBeTruthy();
        });
    });
});