import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.fillRect(0, 0, 600, 300);
    drawOefening();
}

function drawOefening() {
    for (let i = 0; i <= 30; i++) {
        Utils.drawLine(i * 10, 0, 600 - i * 10, 300);
        Utils.drawLine(300 + i * 10, 0, 300 - i * 10, 300);
        Utils.drawLine(0, i * 10, 600, 300 - i * 10);
    }

}