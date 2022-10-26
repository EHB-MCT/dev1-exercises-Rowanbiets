mport context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.fillRect(0, 0, 600, 300);
    drawLines();
}

function drawLines() {
    for (let i = 0; i <= 30, i++)
        Utils.drawLine(i * 10, 0, 600 - i * 10, 300);
    Utils.drawLine()
}