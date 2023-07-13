var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var image = new Image();
image.src = "imagens/inicio.png";
image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
    context.strokeStyle = "#1DB954";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(0, image.height + 2);
    context.lineTo(image.width, image.height + 2);
    context.stroke();
};
