define(['GameObject'], function (GameObject) {
    function Sprite(imageURL, width, height) {
        GameObject.call(this);
        var image = new Image();
        image.src = imageURL;

        this.draw = function (context2D) {
            context2D.drawImage(image, this.position.x, this.position.y, width, height);
        };
    }

    Sprite.prototype = new GameObject();

    return Sprite;
});