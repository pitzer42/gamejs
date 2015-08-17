define(['math/Vector', 'math/Segment'], function (Vector, Segment) {
    describe('Segment', function () {
        it('can be created from two points', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            var segment = new Segment(a, b);
            expect(segment.a).toBe(a);
            expect(segment.b).toBe(b);
        });

        it('can be created from four coordinates', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            var segment = new Segment(1, 2, 3, 4);
            expect(segment.a.equals(a)).toBeTruthy();
            expect(segment.b.equals(b)).toBeTruthy();
        });

        it('can be used as a parametric equation', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            var middle = new Vector(2, 3);
            var segment = new Segment(a, b);
            expect(segment.at(0).equals(a)).toBeTruthy();
            expect(segment.at(0.5).equals(middle)).toBeTruthy();
            expect(segment.at(1).equals(b)).toBeTruthy();
        });

        it('has a middle point', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            var middle = new Vector(2, 3);
            var segment = new Segment(a, b);
            expect(segment.at(0.5).equals(middle)).toBeTruthy();
            expect(segment.middlePoint().equals(middle)).toBeTruthy();
        });

        it('can intersect another segment', function () {
            //+
            var seg1 = new Segment(-1, 0, 1, 0);
            var seg2 = new Segment(0, -1, 0, 1);
            var intersection = seg1.intersects(seg2);
            var expected = new Vector();
            expect(intersection.equals(new Vector())).toBeTruthy();

            //x
            seg1 = new Segment(0, 0, 4, 4);
            seg2 = new Segment(4, 0, 0, 4);
            intersection = seg1.intersects(seg2);
            expected = new Vector(2, 2);
            expect(intersection.equals(expected)).toBeTruthy();
        });

        it('has null intersection with parallel segment', function () {
            var seg1 = new Segment(0, 0, 1, 0);
            var seg2 = new Segment(0, 1, 1, 1);
            expect(seg1.intersects(seg2)).toBe(null);
        });

        it('has null intersection with collinear segment', function () {
            var seg1 = new Segment(0, 0, 1, 1);
            var seg2 = new Segment(2, 2, 3, 3);
            expect(seg1.intersects(seg2)).toBe(null);
        });
    });
});