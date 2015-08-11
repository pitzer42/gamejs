define(function () {
    function Sprite(imageURL, width, height) {
        var image = new Image();
        image.src = imageURL;

        this.draw = function (context2D) {
            context2D.drawImage(image, this.position.x, this.position.y, width, height);
        };
    }

    return Sprite;
});