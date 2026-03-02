/*
---------------------------------------------------------
Aplicación: Malteada Kawaii - Versión Detallada
Autor: Michelle Pacheco
Materia: Graficación por Computadora
Fecha: 2026
Descripción:
Ilustración estilo kawaii generada con más de 50 figuras
usando la API Canvas 2D.
---------------------------------------------------------
*/

const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

/* =========================
   FUNCIONES GENERALES
========================= */

function circulo(x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function rect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function linea(x1, y1, x2, y2, width, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke();
}

function estrella(cx, cy, spikes, outerRadius, innerRadius, color) {
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

    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

/* =========================
   FONDO
========================= */

function fondo() {
    rect(0, 0, 400, 500, "#dcd3f2");

    // Nubes
    circulo(90, 80, 25, "white");
    circulo(120, 80, 30, "white");
    circulo(150, 80, 25, "white");

    circulo(270, 100, 25, "white");
    circulo(300, 100, 30, "white");
    circulo(330, 100, 25, "white");
}

/* =========================
   VASO
========================= */

function vaso() {
    ctx.beginPath();
    ctx.moveTo(120, 150);
    ctx.quadraticCurveTo(100, 400, 200, 430);
    ctx.quadraticCurveTo(300, 400, 280, 150);
    ctx.closePath();
    ctx.fillStyle = "#a8e6ef";
    ctx.fill();
}

function liquido() {
    ctx.beginPath();
    ctx.moveTo(135, 210);
    ctx.quadraticCurveTo(200, 230, 265, 210);
    ctx.lineTo(255, 390);
    ctx.quadraticCurveTo(200, 410, 145, 390);
    ctx.closePath();
    ctx.fillStyle = "#f7a8c4";
    ctx.fill();
}

/* =========================
   CARA KAWAII
========================= */

function ojos() {
    circulo(170, 290, 18, "black");
    circulo(230, 290, 18, "black");

    circulo(165, 280, 6, "white");
    circulo(225, 280, 6, "white");
}

function boca() {
    ctx.beginPath();
    ctx.arc(200, 310, 12, 0, Math.PI);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();
}

function mejillas() {
    circulo(145, 310, 10, "#ff8fab");
    circulo(255, 310, 10, "#ff8fab");
}

function burbujas() {
    circulo(160, 360, 12, "white");
    circulo(210, 340, 8, "white");
    circulo(240, 370, 14, "white");
    circulo(180, 380, 6, "white");
}

/* =========================
   CREMA BATIDA
========================= */

function crema() {
    ctx.beginPath();
    ctx.arc(200, 160, 60, Math.PI, 0);
    ctx.fillStyle = "#f9c6d3";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(200, 140, 40, Math.PI, 0);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(200, 120, 25, Math.PI, 0);
    ctx.fill();
}

/* =========================
   DECORACIONES
========================= */

function fresa() {
    circulo(160, 150, 18, "#ff4d6d");

    // hojas
    circulo(150, 135, 6, "green");
    circulo(160, 130, 6, "green");
    circulo(170, 135, 6, "green");

    // semillas
    for (let i = 0; i < 8; i++) {
        circulo(150 + Math.random() * 20, 145 + Math.random() * 15, 2, "white");
    }
}

function arandano() {
    circulo(240, 165, 12, "#6a4c93");
    circulo(240, 165, 4, "black");
}

function popote() {
    linea(250, 120, 290, 60, 8, "white");

    // rayas
    linea(260, 110, 270, 95, 4, "#fcd34d");
    linea(275, 85, 285, 70, 4, "#fcd34d");
}

function decoracionesExtras() {
    estrella(200, 170, 5, 15, 7, "yellow");

    // confeti
    circulo(100, 450, 6, "#ff8fab");
    circulo(130, 460, 6, "#90dbf4");
    circulo(160, 470, 6, "#fcd34d");
    circulo(240, 470, 6, "#cdb4db");
    circulo(270, 455, 6, "#ffafcc");
}

/* =========================
   EJECUCIÓN
========================= */

fondo();
vaso();
liquido();
ojos();
boca();
mejillas();
burbujas();
crema();
fresa();
arandano();
popote();
decoracionesExtras();