/*
---------------------------------------------------------
Aplicación: Malteada Kawaii con Canvas 2D
Autor: Michelle Pacheco
Materia: Graficación por Computadora
Fecha: 2026
Descripción:
Dibujo generado mediante figuras básicas utilizando
la API Canvas 2D.
---------------------------------------------------------
*/

const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

/* =========================
   FUNCIONES GENERALES
========================= */

// Dibujar círculo
function dibujarCirculo(x, y, radio, color) {
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// Dibujar rectángulo
function dibujarRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

// Dibujar estrella
function dibujarEstrella(cx, cy, spikes, outerRadius, innerRadius, color) {
    let rot = Math.PI / 2 * 3;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
        ctx.lineTo(cx + Math.cos(rot) * outerRadius,
                   cy + Math.sin(rot) * outerRadius);
        rot += step;

        ctx.lineTo(cx + Math.cos(rot) * innerRadius,
                   cy + Math.sin(rot) * innerRadius);
        rot += step;
    }

    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

/* =========================
   DIBUJO PRINCIPAL
========================= */

function dibujarVaso() {
    dibujarRect(120, 150, 160, 250, "#9bd3dd");
}

function dibujarLiquido() {
    dibujarRect(130, 200, 140, 190, "#f7a8c4");
}

function dibujarCara() {
    dibujarCirculo(170, 270, 15, "black");
    dibujarCirculo(230, 270, 15, "black");

    dibujarCirculo(170, 265, 5, "white");
    dibujarCirculo(230, 265, 5, "white");

    ctx.beginPath();
    ctx.arc(200, 290, 10, 0, Math.PI);
    ctx.stroke();
}

function dibujarMejillas() {
    dibujarCirculo(150, 290, 8, "#ff8fab");
    dibujarCirculo(250, 290, 8, "#ff8fab");
}

function dibujarBurbujas() {
    dibujarCirculo(160, 350, 10, "white");
    dibujarCirculo(210, 330, 8, "white");
    dibujarCirculo(240, 360, 12, "white");
}

function dibujarCrema() {
    ctx.beginPath();
    ctx.arc(200, 150, 60, Math.PI, 0);
    ctx.fillStyle = "#f9c6d3";
    ctx.fill();
}

function dibujarPopote() {
    ctx.beginPath();
    ctx.moveTo(260, 120);
    ctx.lineTo(300, 60);
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#fcd34d";
    ctx.stroke();
}

function dibujarDecoraciones() {
    dibujarEstrella(200, 180, 5, 15, 7, "yellow");
    dibujarCirculo(170, 170, 12, "red");
}

/* =========================
   EJECUCIÓN
========================= */

dibujarVaso();
dibujarLiquido();
dibujarCara();
dibujarMejillas();
dibujarBurbujas();
dibujarCrema();
dibujarPopote();
dibujarDecoraciones();