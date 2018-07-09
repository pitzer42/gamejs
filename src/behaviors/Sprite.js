define(function () {
    function Sprite(imageURL, width, height) {
        var image = new Image();
        image.src = imageURL;

        this.draw = function (context) {
            context.drawImage(image, 0, 0, width, height);
        };
    }

    return Sprite;
});