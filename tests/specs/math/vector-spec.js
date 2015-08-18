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

        it('can be created with any coordinates', function () {
            var x = 1;
            var y = -1;
            var vector = new Vector(x, y);
            expect(vector.x).toBe(x);
            expect(vector.y).toBe(y);
        });

        it('can be created as a copy of another Vector', function(){
            var original = new Vector(1, 2);
            var copy = new Vector(original);
            expect(original).not.toBe(copy);
            expect(original.equals(copy)).toBeTruthy();
        });

        it('can be compared for equality', function () {
            var a = new Vector();
            var b = new Vector();
            expect(a.equals(b)).toBeTruthy();
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

        it('can be set with the sum of another vector', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            a.setSum(b);
            expect(a.toString()).toBe('(4, 6)');
        });

        it('can be subtracted by another vector', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            expect(a.subtract(b).toString()).toBe('(-2, -2)');
        });

        it('can be set with the subtraction of another vector', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            a.setSubtract(b);
            expect(a.toString()).toBe('(-2, -2)');
        });

        it('can be inverted', function () {
            var a = new Vector(1, 2);
            expect(a.inverse().toString()).toBe('(-1, -2)');
        });

        it('can be set with its inverse', function () {
            var a = new Vector(1, 2);
            a.setInverse();
            expect(a.toString()).toBe('(-1, -2)');
        });

        it('can rotate around the origin', function () {
            var a = new Vector(1, 1);
            var b = a.rotate(Math.PI / 4);
            expect(b.x).toBeCloseTo(0);
            expect(b.y).toBeCloseTo(Math.sqrt(2));
        });

        it('can be set with its rotation around the origin', function () {
            var a = new Vector(1, 1);
            a.setRotate(Math.PI / 4);
            expect(a.x).toBeCloseTo(0);
            expect(a.y).toBeCloseTo(Math.sqrt(2));
        })

        it('can rotate around any point', function () {
            var pivot = new Vector(2, 2);
            var a = new Vector(1, 1);
            var b = a.rotate(Math.PI / 4, pivot);
            expect(b.x).toBeCloseTo(2);
            expect(b.y).toBeCloseTo(2 - Math.sqrt(2));
        });

        it('can be set with its rotation around any point', function () {
            var pivot = new Vector(2, 2);
            var a = new Vector(1, 1);
            a.setRotate(Math.PI / 4, pivot);
            expect(a.x).toBeCloseTo(2);
            expect(a.y).toBeCloseTo(2 - Math.sqrt(2));
        });

        it('has a magnitude', function () {
            var a = new Vector(1, 2);
            expect(a.magnitude()).toBeCloseTo(Math.sqrt(5));
        });

        it('can measure the distance to another vector', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            expect(a.distance(b)).toBe(Math.sqrt(8));
        });

        it('can be normalized', function () {
            var vector = new Vector(123, 456);
            expect(vector.normalize().magnitude()).toBeCloseTo(1);
        });

        it('can calculate the dot product', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            expect(a.dot(b)).toBe(11);
        });

        it('has forms an angle with another vector', function(){
            var up = new Vector(0,1);
            var down = new Vector(0,-1);
            expect(up.angle(down)).toBeCloseTo(Math.PI);
        });

        it('can calculate coordinate on the z axis of the cross product', function () {
            var a = new Vector(1, 2);
            var b = new Vector(3, 4);
            expect(a.cross(b)).toBe(-2);
        });
    });
});