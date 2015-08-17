define(['math/Rectangle', 'math/Circle', 'math/Vector'], function (Rectangle, Circle, Vector) {
    describe('Rectangle', function () {

        it('is defined by x and y coordenates, width and height', function () {
            var rect = new Rectangle();
            expect(rect.x).toBeDefined();
            expect(rect.y).toBeDefined();
            expect(rect.width).toBeDefined();
            expect(rect.height).toBeDefined();
        });

        it('can intersect another rectangle', function () {
            var a = new Rectangle(0, 0, 2, 2);
            var b = new Rectangle(1, 1, 2, 2);
            expect(a.intersects(b)).toBeTruthy();
        });

        it('can intersect a circle', function(){
            var rect = new Rectangle();
            var circle = new Circle();
            expect(rect.intersects(circle)).toBeTruthy();
        });
    });
});