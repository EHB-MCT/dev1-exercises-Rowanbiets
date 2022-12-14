"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawColorMaze();

function drawMaze() {
    context.fillStyle = "darkgray";
    context.linecap = "square"
    context.lineWidth = 5;
    let space = 10;

    context.fillRect(0, 0, width, height);

    for (let i = 0; i < width / space; i++) {
        for (let j = 0; j < height / space; j++) {
            let r = Math.round(Math.random() * 2);

            if (r == 0) {
                Utils.drawLine(i * space, j * space, (i + 1) * space, (j + 1) * space);
            } else {
                Utils.drawLine(i * space, (j + 1) * space, (i + 1) * space, j * space);
            }
        }
    }
}

function drawColorMaze() {
    context.fillStyle = "black";
    context.linecap = "square"
    context.lineWidth = 5;
    let space = 10;

    context.fillRect(0, 0, width, height);

    for (let i = 0; i < width / space; i++) {
        for (let j = 0; j < height / space; j++) {
            let r = Math.round(Math.random() * 2);
            context.strokeStyle = Utils.hsl(Math.random() * 360, 50, 50)
            if (r == 0) {
                Utils.drawLine(i * space, j * space, (i + 1) * space, (j + 1) * space);
            } else {
                Utils.drawLine(i * space, (j + 1) * space, (i + 1) * space, j * space);
            }
        }
    }
}