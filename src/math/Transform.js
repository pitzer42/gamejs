define(['math/Vector', 'util/Composite'], function (Vector) {
    function Transform(other) {
        if (other) {
            this.scale = new Vector(other.scale);
            this.position = new Vector(other.position);
            this.rotation = other.rotation;
            this.parent = other.parent;

        } else {
            this.scale = new Vector(1, 1);
            this.position = new Vector();
            this.rotation = 0;
            this.parent = null;
        }
    }

    Transform.prototype.getGlobal = function () {
        var globalTransform = new Transform(this);
        var next = this.parent;
        while (next) {
            globalTransform.position.setSum(next.position);
            globalTransform.scale.x *= next.scale.x;
            globalTransform.scale.y *= next.scale.y;
            globalTransform.rotation += next.rotation;
            next = next.parent;
        }
        return globalTransform;
    }

    Transform.prototype.applyTo = function (context) {
        context.translate(Math.floor(this.position.x), Math.floor(this.position.y));
        context.rotate(this.rotation);
        context.scale(this.scale.x, this.scale.y);
    };

    return Transform;
});