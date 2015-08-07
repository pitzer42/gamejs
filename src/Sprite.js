define(['GameComponent'], function (GameComponent) {
    function Sprite(imageURL, size) {
        GameComponent.call(this);
        this.size = size;
        var image = new Image();
        image.src = imageURL;

        this.draw = function (context2D) {
            GameComponent.prototype.draw.call(this, context2D);
            context2D.drawImage(image, this.position.x, this.position.y, this.size.x, this.size.y);
        };
    }

    Sprite.prototype = new GameComponent();

    return Sprite;
});