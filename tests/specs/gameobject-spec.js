define(['core/GameObject'], function (GameObject) {
    describe('GameObject', function () {

        var context = {};
        context.save = function(){};
        context.restore = function(){};
        context.translate = function(){};
        context.rotate = function(){};
        context.scale = function () {};

        it('has a transform', function () {
            var obj = new GameObject();
            expect(obj.transform).toBeDefined();
        });

        it('can form a tree hierarchy', function () {
            var a = new GameObject();
            var b = new GameObject();
            var c = new GameObject();
            var d = new GameObject();
            var e = new GameObject();

            c.add(e);
            c.add(d);
            a.add(b);
            a.add(c);

            expect(e.parent).toBe(c);
            expect(d.parent).toBe(c);
            expect(c.parent).toBe(a);
            expect(b.parent).toBe(a);
            expect(a.parent).toBe(null);
        });

        it('can receive a behavior on the constructor', function(){
            var wasUpdated = false;
            var obj = new GameObject({
                update: function(){
                    wasUpdated = true;
                }
            });
            obj.update();
            expect(wasUpdated).toBeTruthy();
        });

        it('defines a gameObject and a transform fields on attached behaviors', function(){
            var obj = new GameObject();
            var behavior = {};
            obj.add(behavior);
            expect(behavior.gameObject).toBe(obj);
            expect(behavior.transform).toBe(obj.transform);
        });

        it('can have multiple draw and update behaviors', function(){
            var wasUpdated = false;
            var wasDrew = false;
            var obj = new GameObject();
            obj.add({
                update: function (delta){
                    wasUpdated = true;
                },
                draw: function (context2D){
                    wasDrew = true;
                }
            });
            obj.update(1);
            obj.draw(context);
            expect(wasUpdated).toBeTruthy();
            expect(wasDrew).toBeTruthy();
        });

        it('update and draw are called in pre-order through the GameObject tree', function(){
            var a = new GameObject();
            var b = new GameObject();
            var c = new GameObject();
            var d = new GameObject();

            a.add(b);
            b.add(c);
            a.add(d);

            var updateLog = '';
            var drawLog = '';

            function TestBehavior(name){
                this.update = function(){
                    updateLog += name;
                };

                this.draw = function(){
                    drawLog += name;
                };
            }

            a.add(new TestBehavior('a'));
            b.add(new TestBehavior('b'));
            c.add(new TestBehavior('c'));
            d.add(new TestBehavior('d'));

            a.update(0);
            a.draw(context);

            expect(updateLog).toBe('abcd');
            expect(drawLog).toBe('abcd');
        });
    });
});