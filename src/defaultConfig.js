define(function () {
    var canvas = document.getElementById('game-canvas');

    return {
        viewport: canvas.getBoundingClientRect(),
        context: canvas.getContext('2d'),
        refreshRate: 1000 / 60
    };
});