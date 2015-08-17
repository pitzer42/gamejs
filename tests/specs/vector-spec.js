define(['math/Vector'], function (Vector) {
    describe('Vector', function () {

        it('is bidimensional', function () {
            var a = new Vector();
            expect(a.x).toBeDefined();
            expect(a.y).toBeDefined();
        });

        it('is at origin by default', function () {
            var origin = new Vector();
            expect(origin.x).toBe(0);
            expect(origin.y).toBe(0);
        });

        it('has a readable string form', function () {
            var origin = new Vector();
            expect(origin.toString()).toBe('(0, 0)');
        });

        it('can be translated', function () {
            var a = new Vector();
            var b = new Vector(1, 2);
            a.translate(b);
            expect(a.x).toBe(b.x);
            expect(a.y).toBe(b.y);
        });

        it('can be summed with another vector', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            expect(a.sum(b).toString()).toBe('(4, 6)');
        });

        it('can be subtracted by another vector', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            expect(a.subtract(b).toString()).toBe('(-2, -2)');
        });

        it('can produce an inverse', function () {
            var a = new Vector(1, 2);
            var inverse = a.inverse();
            expect(inverse.toString()).toBe('(-1, -2)');
        });

        it('has a magnitude', function () {
            var a = new Vector(1, 2);
            expect(a.magnitude()).toBeCloseTo(Math.sqrt(5));
        });

        it('can measure the distance from another vector', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            expect(a.distance(b)).toBe(Math.sqrt(8));
        });

        it('can rotate around the origin', function(){
            var a = new Vector(1, 1);
            var b = a.rotate(Math.PI / 4);
            expect(b.x).toBeCloseTo(0);
            expect(b.y).toBeCloseTo(Math.sqrt(2));
        });

        it('can rotate around any point', function(){
            var pivot = new Vector(2, 2);
            var a = new Vector(1, 1);
            var b = a.rotate(Math.PI / 4, pivot);
            expect(b.x).toBeCloseTo(2);
            expect(b.y).toBeCloseTo(2 - Math.sqrt(2));
        });
    });
});