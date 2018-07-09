define(function () {
    function AnimatedSprite(imageURL, width, height, sheetWidth, frameQuantity, animationTime) {
        var spriteSheet = new Image();
        spriteSheet.src = imageURL;

        var frameX = 0;
        var frameY = 0;
        var frameIndex = 0;
        var timer = 0;
        var perFrameTime = animationTime / frameQuantity;
        var framesPerLine = sheetWidth / width;

        this.update = function (delta) {
            timer += delta;
            if (timer >= perFrameTime) {
                timer = 0;
                if (++frameIndex === frameQuantity)
                    frameIndex = 0;
                frameX = (frameIndex % framesPerLine) * width;
                frameY = Math.floor(frameIndex / framesPerLine) * height;
            }
        };

        this.draw = function (context) {
            context.drawImage(spriteSheet, frameX, frameY, width, height, 0, 0, width, height);
        };
    }

    return AnimatedSprite;
});