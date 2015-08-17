define(['math/Vector'], function(Vector){
    function Polygon(){
        this.rotation = 0;
    }

    Polygon.prototype.contains = function(point){
        return false;
    }

    //relaçao nao reflexiva
    Polygon.prototype.intersects = function(other){
        var result = false;
        var originalRotation = other.rotation;
        other.rotation = -this.rotation;
        var vertices = other.vertices();
        //fallback for Circles
        if(vertices.length == 0){
            other.rotation = originalRotation;
            return other.intersects(this);
        }
        for(var i = 0; i < vertices.length; i++){
            if(this.contains(vertices[i])){
                result = true;
                break;
            }
        }
        other.rotation = originalRotation;
        return result;
    };
});