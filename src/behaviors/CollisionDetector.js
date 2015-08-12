define(['behaviors/Collider'], function(Collider){
    function CollisionDetector(){}

    CollisionDetector.prototype.update = function(delta){
        var allColliders = [];
        this.gameObject.forEachChild(
            function(child){
                var colliders = child.getColliders();
                for(var i = 0; i < colliders.length; i++)
                    allColliders.push(colliders[i]);
            }
        );
        for(var i = 0; i < allColliders.length; i++){
            for(var j = i + 1; j < allColliders.length; j++) {
                var a = allColliders[i];
                var b = allColliders[j];
                if(a.collides(b)){
                    a.gameObject.onCollision(b);
                    b.gameObject.onCollision(a);
                }
            }
        }
    };

    return CollisionDetector;

});