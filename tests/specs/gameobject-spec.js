define(['core/GameObject'], function (GameObject) {
    describe('GameObject', function () {

        var context2D = {};
        context2D.save = function(){};
        context2D.restore = function(){};
        context2D.translate = function(){};
        context2D.rotate = function(){};
        context2D.scale = function () {};

        it('has a position and a rotation', function () {
            var obj = new GameObject();
            expect(obj.position).toBeDefined();
            expect(obj.rotation).toBeDefined();
        });

        it('can form a tree hierarchy', function () {
            var a = new GameObject();
            var b = new GameObject();
            var c = new GameObject();
            var d = new GameObject();
            var e = new GameObject();

            c.addChild(e);
            c.addChild(d);
            a.addChild(b);
            a.addChild(c);

            expect(e.parent).toBe(c);
            expect(d.parent).toBe(c);
            expect(c.parent).toBe(a);
            expect(b.parent).toBe(a);
            expect(a.parent).toBe(null);
        });

        it('can have multiple draw and update behaviors', function(){
            var wasUpdated = false;
            var wasDrew = false;
            var obj = new GameObject();
            obj.addBehavior({
                update: function (delta){
                    wasUpdated = true;
                },
                draw: function (context2D){
                    wasDrew = true;
                }
            });
            obj.update(1);
            obj.draw(context2D);
            expect(wasUpdated).toBeTruthy();
            expect(wasDrew).toBeTruthy();
        });
    });
});