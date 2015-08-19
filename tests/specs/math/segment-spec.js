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

        it('can check if contains a point', function () {
            var segment = new Segment(0, 0, 2, 2);
            var point = new Vector(1,1);
            expect(segment.intersects(point)).toBeTruthy();
            point.setScale(100);
            expect(segment.intersects(point)).toBeFalsy();
        });

        it('has a middle point', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            var middle = new Vector(2, 3);
            var segment = new Segment(a, b);
            expect(segment.at(0.5).equals(middle)).toBeTruthy();
            expect(segment.middlePoint().equals(middle)).toBeTruthy();
        });

        it('has a length', function () {
            var segment = new Segment(0, 0, 1, 1);
            expect(segment.length()).toBeCloseTo(Math.sqrt(2));
        });

        describe('intersects', function () {
            it('crossed segments', function () {
                var seg1 = new Segment(-1, 0, 1, 0);
                var seg2 = new Segment(0, -1, 0, 1);
                var intersection = seg1.intersects(seg2);
                var expected = new Vector();
                expect(intersection.equals(expected)).toBeTruthy();
                intersection = seg2.intersects(seg1);
                expect(intersection.equals(expected)).toBeTruthy();
            });

            it('X segments', function () {
                var seg1 = new Segment(1, 1, 10, 10);
                var seg2 = new Segment(10, 1, 1, 10);
                var expected = new Vector(5.5, 5.5);
                var intersection = seg1.intersects(seg2);
                expect(intersection.equals(expected)).toBeTruthy();
                intersection = seg2.intersects(seg1);
                expect(intersection.equals(expected)).toBeTruthy();
            });

            it('common extreme points', function () {
                var seg1 = new Segment(1, 2, 3, 4);
                var seg2 = new Segment(3, 4, 5, 0);
                var intersection = seg1.intersects(seg2);
                var expected = new Vector(3, 4);
                expect(intersection.equals(expected)).toBeTruthy();
                intersection = seg2.intersects(seg1);
                expect(intersection.equals(expected)).toBeTruthy();
            });

            it('null for parallels', function () {
                var seg1 = new Segment(0, 0, 1, 0);
                var seg2 = new Segment(0, 1, 1, 1);
                expect(seg1.intersects(seg2)).toBeNull();
                expect(seg2.intersects(seg1)).toBeNull();
            });

            it('null for collinear', function () {
                var seg1 = new Segment(0, 0, 1, 1);
                var seg2 = new Segment(2, 2, 3, 3);
                expect(seg1.intersects(seg2)).toBeNull();
                expect(seg2.intersects(seg1)).toBeNull();
            });

            it('null for non-collinear, non-parallel and non-concurrent segment', function () {
                var seg1 = new Segment(0, 0, 1, 1);
                var seg2 = new Segment(2, 1, 3, 0);
                expect(seg1.intersects(seg2)).toBeNull()
                expect(seg2.intersects(seg1)).toBeNull();
            });

            it('null for same segment', function () {
                var seg1 = new Segment(1, 2, 3, 4);
                var seg2 = new Segment(1, 2, 3, 4);
                expect(seg1.intersects(seg2)).toBeNull();
                expect(seg2.intersects(seg1)).toBeNull();
            });
        });
    });
});