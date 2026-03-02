/* 
---------------------------------------------------------
Aplicación: Malteada Kawaii - Versión Final Mejorada
Autor: Michelle Pacheco
Materia: Graficación por Computadora
Fecha: 2026
---------------------------------------------------------
*/

const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

/* CONFIGURACIÓN GENERAL */
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 6;
ctx.strokeStyle = "black";

/* =========================
   FONDO SUAVE
========================= */
let grad = ctx.createLinearGradient(0,0,0,500);
grad.addColorStop(0,"#dcd6f7");
grad.addColorStop(1,"#cdb4db");
ctx.fillStyle = grad;
ctx.fillRect(0,0,400,500);

/* =========================
   NUBES MÁS SUAVES
========================= */
function nube(x,y){
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(x,y,22,0,Math.PI*2);
    ctx.arc(x+28,y-5,28,0,Math.PI*2);
    ctx.arc(x+56,y,22,0,Math.PI*2);
    ctx.fill();
}
nube(70,90);
nube(250,110);

/* =========================
   SOMBRA MÁS REALISTA
========================= */
ctx.beginPath();
ctx.ellipse(200,440,120,22,0,0,Math.PI*2);
ctx.fillStyle="rgba(0,0,0,0.15)";
ctx.fill();

/* =========================
   VASO MÁS SIMÉTRICO
========================= */
ctx.beginPath();
ctx.moveTo(120,165);
ctx.bezierCurveTo(95,300,120,390,200,430);
ctx.bezierCurveTo(280,390,305,300,280,165);
ctx.closePath();
ctx.fillStyle="#bdeef5";
ctx.fill();
ctx.stroke();

/* BORDE SUPERIOR */
ctx.beginPath();
ctx.ellipse(200,165,85,22,0,0,Math.PI*2);
ctx.fillStyle="#a8e6ef";
ctx.fill();
ctx.stroke();

/* =========================
   BRILLO CRISTAL
========================= */
ctx.globalAlpha = 0.5;
ctx.beginPath();
ctx.roundRect(150,210,20,150,20);
ctx.fillStyle="white";
ctx.fill();
ctx.globalAlpha = 1;

/* =========================
   LÍQUIDO MÁS ORGÁNICO
========================= */
ctx.beginPath();
ctx.moveTo(135,225);
ctx.bezierCurveTo(165,260,235,260,265,225);
ctx.lineTo(250,390);
ctx.bezierCurveTo(200,410,150,390,150,390);
ctx.closePath();
ctx.fillStyle="#f8b6cc";
ctx.fill();

/* BURBUJAS */
[
 {x:160,y:360,r:12},
 {x:200,y:345,r:8},
 {x:240,y:370,r:14},
 {x:180,y:385,r:6}
].forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,255,255,0.8)";
    ctx.fill();
});

/* =========================
   CARA MÁS KAWAII
========================= */
function ojo(x){
    ctx.beginPath();
    ctx.arc(x,300,22,0,Math.PI*2);
    ctx.fillStyle="black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x-7,290,8,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x+6,310,5,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();
}
ojo(170);
ojo(230);

/* BOCA MÁS CURVA */
ctx.lineWidth=5;
ctx.beginPath();
ctx.moveTo(185,318);
ctx.quadraticCurveTo(200,335,215,318);
ctx.stroke();

/* MEJILLAS */
ctx.beginPath();
ctx.arc(145,315,12,0,Math.PI*2);
ctx.arc(255,315,12,0,Math.PI*2);
ctx.fillStyle="#ff8fab";
ctx.fill();

/* =========================
   CREMA MÁS ESPONJOSA
========================= */
let capas=[70,50,35];
capas.forEach((r,i)=>{
    ctx.beginPath();
    ctx.arc(200,175-(i*28),r,Math.PI,0);
    ctx.fillStyle="#ffc2d1";
    ctx.fill();
    ctx.stroke();
});

/* PICO MÁS DEFINIDO */
ctx.beginPath();
ctx.moveTo(200,90);
ctx.quadraticCurveTo(225,120,175,120);
ctx.fill();
ctx.stroke();

/* =========================
   FRESA (AJUSTADA A IMAGEN ORIGINAL)
========================= */
ctx.save();

// 1. Posición y Rotación: Un poco inclinada a la izquierda
ctx.translate(210, 130); 
ctx.rotate(-0.2);

// 2. Cuerpo de la Fresa (Forma de gota/corazón)
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.bezierCurveTo(-15, -5, -25, 20, 0, 35); // Lado izquierdo
ctx.bezierCurveTo(25, 20, 15, -5, 0, 0);    // Lado derecho
ctx.fillStyle = "#ff5e5e"; // Rojo fresa
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

// 3. Hojas Verdes (Sépalos)
ctx.fillStyle = "#4ade80"; // Verde claro
for(let i = 0; i < 3; i++) {
    ctx.save();
    ctx.rotate((i - 1) * 0.5);
    ctx.beginPath();
    ctx.ellipse(0, 0, 5, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

// 4. Semillas (Puntitos blancos)
ctx.fillStyle = "white";
const puntos = [
    {x: -5, y: 10}, {x: 5, y: 10}, 
    {x: 0, y: 18}, {x: -7, y: 22}, 
    {x: 7, y: 22}, {x: 0, y: 28}
];

puntos.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
    ctx.fill();
});

ctx.restore();
/* =========================
   ESTRELLA
========================= */
function estrella(cx,cy){
    ctx.save();
    ctx.translate(cx,cy);
    ctx.rotate(0.4);
    let spikes=5, outer=16, inner=8;
    let rot=Math.PI/2*3;
    let step=Math.PI/spikes;
    ctx.beginPath();
    ctx.moveTo(0,-outer);
    for(let i=0;i<spikes;i++){
        ctx.lineTo(Math.cos(rot)*outer,Math.sin(rot)*outer);
        rot+=step;
        ctx.lineTo(Math.cos(rot)*inner,Math.sin(rot)*inner);
        rot+=step;
    }
    ctx.closePath();
    ctx.fillStyle="#ffe066";
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}
estrella(200,185);

/* =========================
   ARÁNDANO MÁS PROFUNDO
========================= */
ctx.beginPath();
ctx.arc(240,170,12,0,Math.PI*2);
ctx.fillStyle="#6a4c93";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(240,165,5,0,Math.PI*2);
ctx.fillStyle="white";
ctx.fill();

/* =========================
   POPOTE DENTRO DE LA CREMA (CORRECTO)
========================= */
ctx.save();

/* 1. Posición: Ajustada para que salga desde la derecha de la crema */
ctx.translate(200, 170); 

/* 2. Inclinación: Hacia la derecha (0.3) para igualar la imagen original */
ctx.rotate(0.3); 

/* 3. Cuerpo: Más delgado (12px) y largo como en el dibujo original */
ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.rect(0, -145, 12, 145); // Dibujado hacia arriba
ctx.fill();
ctx.stroke();

/* 4. Franjas: Diagonales estilo caramelo (idéntico al original) */
ctx.fillStyle = "#ffd60a";
for (let i = 0; i < 7; i++) {
    let yOffset = -20 - (i * 20);
    ctx.beginPath();
    ctx.moveTo(0, yOffset);           // Lado izquierdo
    ctx.lineTo(12, yOffset - 10);     // Sube en diagonal al lado derecho
    ctx.lineTo(12, yOffset - 3);      // Baja un poco en el derecho
    ctx.lineTo(0, yOffset + 7);       // Baja al punto de inicio izquierdo
    ctx.closePath();
    ctx.fill();
}

ctx.restore();

/* =========================
   CONFETI MÁS ORGANIZADO
========================= */
let colores=["#ff8fab","#90dbf4","#fcd34d","#cdb4db","#a0e7e5"];
for(let i=0;i<12;i++){
    ctx.beginPath();
    ctx.arc(70+(i*22),460,6,0,Math.PI*2);
    ctx.fillStyle=colores[i%5];
    ctx.fill();
}

/* BRILLO FINAL */
ctx.beginPath();
ctx.arc(360,455,14,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,255,0.6)";
ctx.fill();