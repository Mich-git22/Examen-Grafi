/**
 * ======================================================
 * Aplicación: Dibujo Torre Paisaje con Canvas 2D
 * Materia: Graficación por Computadora
 * Alumna: Michelle Pacheco
 * Fecha: 2026
 * Descripción:
 * Dibujo de una torre estilo Eiffel con paisaje,
 * utilizando más de 30 figuras básicas de Canvas.
 * ======================================================
 */

window.onload = function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    dibujarCielo(ctx);
    dibujarSol(ctx);
    dibujarNubes(ctx);
    dibujarSuelo(ctx);
    dibujarRio(ctx);
    dibujarTorre(ctx);
};

/* =========================
   FONDO
========================= */

function dibujarCielo(ctx) {
    ctx.fillStyle = "#b3e5fc";
    ctx.fillRect(0, 0, 500, 600);
}

function dibujarSuelo(ctx) {
    ctx.fillStyle = "#66bb6a";
    ctx.fillRect(0, 500, 500, 100);
}

function dibujarRio(ctx) {
    ctx.fillStyle = "#2196f3";
    ctx.beginPath();
    ctx.moveTo(200, 500);
    ctx.lineTo(300, 500);
    ctx.lineTo(270, 600);
    ctx.lineTo(230, 600);
    ctx.closePath();
    ctx.fill();
}

/* =========================
   SOL Y NUBES
========================= */

function dibujarSol(ctx) {
    ctx.fillStyle = "#ffca28";
    ctx.beginPath();
    ctx.arc(100, 100, 40, 0, Math.PI * 2);
    ctx.fill();
}

function dibujarNubes(ctx) {
    ctx.fillStyle = "white";

    // Nube 1
    ctx.beginPath();
    ctx.arc(80, 150, 25, 0, Math.PI * 2);
    ctx.arc(110, 150, 30, 0, Math.PI * 2);
    ctx.arc(140, 150, 25, 0, Math.PI * 2);
    ctx.fill();

    // Nube 2
    ctx.beginPath();
    ctx.arc(350, 180, 20, 0, Math.PI * 2);
    ctx.arc(380, 180, 25, 0, Math.PI * 2);
    ctx.arc(410, 180, 20, 0, Math.PI * 2);
    ctx.fill();
}

/* =========================
   TORRE
========================= */

function dibujarTorre(ctx) {

    ctx.strokeStyle = "#5d4037";
    ctx.lineWidth = 4;

    // Base izquierda
    ctx.beginPath();
    ctx.moveTo(180, 500);
    ctx.lineTo(230, 250);
    ctx.stroke();

    // Base derecha
    ctx.beginPath();
    ctx.moveTo(320, 500);
    ctx.lineTo(270, 250);
    ctx.stroke();

    // Arco
    ctx.beginPath();
    ctx.arc(250, 500, 70, Math.PI, 0);
    ctx.stroke();

    // Piso medio
    ctx.strokeRect(210, 250, 80, 20);

    // Parte superior
    ctx.beginPath();
    ctx.moveTo(230, 250);
    ctx.lineTo(250, 100);
    ctx.lineTo(270, 250);
    ctx.stroke();

    // Antena
    ctx.beginPath();
    ctx.moveTo(250, 100);
    ctx.lineTo(250, 60);
    ctx.stroke();

    // Luces
    for(let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(240 + i*2, 90 + i*3, 3, 0, Math.PI*2);
        ctx.fillStyle = "#ffeb3b";
        ctx.fill();
    }
}