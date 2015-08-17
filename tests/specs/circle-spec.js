define(['math/Circle', 'math/Vector'], function (Circle, Vector) {
    describe('Circle', function () {

        it('is defined by x and y coordenates and radius', function () {
            var circle = new Circle();
            expect(circle.x).toBeDefined();
            expect(circle.y).toBeDefined();
            expect(circle.radius).toBeDefined();
        });

        it('can intersect another circle', function () {
            var a = new Circle(0, 0, 2);
            var b = new Circle(1, 1, 2);
            expect(a.intersects(b)).toBeTruthy();
        });

        it('can intersect a point', function(){
            var circle = new Circle();
            var point = new Vector();
            expect(circle.intersects(point)).toBeTruthy();
        });
    });
});