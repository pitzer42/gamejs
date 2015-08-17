define(['util/Composite'], function (Composite) {
    describe('Composite', function () {

        it('is an array', function () {
            var composite = new Composite();
            expect(composite instanceof Array).toBeTruthy();

        });

        it('can add items', function () {
            var composite = new Composite();
            composite.add(1);
            expect(composite.length).toBe(1);
        });

        it('can remove items', function () {
            var composite = new Composite();
            composite.add(1);
            expect(composite.remove(1)).toBeTruthy();
            expect(composite.length).toBe(0);
        });


        it('has the attributes named on the constructor arguments', function () {
            var composite = new Composite('a', 'b');
            expect(composite.a).toBeDefined();
            expect(composite.b).toBeDefined();
        });

        it('propagates method calls to its components', function () {
            var composite = new Composite('increment');
            var counter = 0;

            function Incrementer() {
                this.increment = function (n) {
                    counter += n || 1;
                };
            }

            composite.add(new Incrementer());
            composite.add(new Incrementer());
            composite.increment();
            expect(counter).toBe(2);
        });
    });
});