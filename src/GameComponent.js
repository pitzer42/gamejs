define(['Vector2'], function (Vector2) {
    function GameComponent() {
        this.position = new Vector2();
        this.rotation = 0;
        this.components = [];
    }

    GameComponent.prototype.add = function (component) {
        this.components.push(component);
    };

    GameComponent.prototype.remove = function (component) {
        var index = this.components.indexOf(component);
        if (index > -1)
            this.components.slice(index, 1);
    };

    GameComponent.prototype.update = function (delta) {
        for (var i = 0; i < this.components.length; i++)
            this.components[i].update(delta);
    };

    GameComponent.prototype.draw = function (context2D) {
        context2D.translate(this.position.x, this.position.y);
        context2D.rotate(this.rotation);
        for (var i = 0; i < this.components.length; i++) {
            context2D.save();
            this.components[i].draw(context2D);
            context2D.restore();
        }
    };

    return GameComponent;
});