/* ---------------------------------------------------------
Aplicación: Malteada Kawaii
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
   VASO (EFECTO DOBLE BORDE CRISTALINO)
========================= */
ctx.beginPath();
ctx.moveTo(120,165);
ctx.bezierCurveTo(95,300,120,430,200,430);
ctx.bezierCurveTo(280,430,305,300,280,165);
ctx.closePath();
ctx.fillStyle="#bdeef5"; 
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(135,170);
ctx.bezierCurveTo(115,300,140,415,200,415);
ctx.bezierCurveTo(260,415,285,300,265,170);
ctx.strokeStyle="rgba(110, 200, 220, 0.5)"; 
ctx.lineWidth = 4;
ctx.stroke();

ctx.strokeStyle="black";
ctx.lineWidth = 6;

/* BORDE SUPERIOR */
ctx.beginPath();
ctx.ellipse(200,165,85,22,0,0,Math.PI*2);
ctx.fillStyle="#a8e6ef"; 
ctx.fill();
ctx.stroke();

/* =========================
   LÍQUIDO ROSA
========================= */
ctx.save();
ctx.beginPath();
ctx.moveTo(135, 215); 
ctx.bezierCurveTo(115, 300, 140, 415, 200, 415); 
ctx.bezierCurveTo(260, 415, 285, 300, 265, 215); 
ctx.bezierCurveTo(230, 235, 170, 235, 135, 215);
ctx.closePath();
ctx.fillStyle = "#ffcced"; 
ctx.fill();
ctx.restore();

/* =========================
   BRILLO CRISTAL
========================= */
ctx.globalAlpha = 0.5;
ctx.beginPath();
ctx.roundRect(150,210,20,150,20);
ctx.fillStyle="white";
ctx.fill();
ctx.globalAlpha = 1;

/* BURBUJAS */
[
 {x:175,y:380,r:8},
 {x:200,y:400,r:11},
 {x:235,y:395,r:10},
 {x:185,y:345,r:5}
].forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,255,255,0.8)";
    ctx.fill();
});

/* =========================
   CARA KAWAII (AJUSTADA)
========================= */
function ojo(x){
    ctx.beginPath();
    ctx.arc(x,315,22,0,Math.PI*2); // Bajamos un poco los ojos
    ctx.fillStyle="black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x-7,305,8,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x+6,325,5,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();
}
ojo(170); // Ojo izquierdo
ojo(230); // Ojo derecho

/* BOCA TIPO "W" (IGUAL A LA ORIGINAL) */
ctx.lineWidth = 4;
// Lado izquierdo de la boca
ctx.beginPath();
ctx.arc(193, 325, 7, 0, Math.PI); 
ctx.stroke();
// Lado derecho de la boca
ctx.beginPath();
ctx.arc(207, 325, 7, 0, Math.PI);
ctx.stroke();

/* MEJILLAS */
ctx.beginPath();
ctx.arc(140,335,12,0,Math.PI*2);
ctx.arc(260,335,12,0,Math.PI*2);
ctx.fillStyle="#ff8fab";
ctx.fill();

/* =========================
   CREMA
========================= */
let capas=[70,50,35];
capas.forEach((r,i)=>{
    ctx.beginPath();
    ctx.arc(200,175-(i*28),r,Math.PI,0);
    ctx.fillStyle="#ffc2d1";
    ctx.fill();
    ctx.stroke();
});

/* PICO DE CREMA */
ctx.beginPath();
ctx.moveTo(200,90);
ctx.quadraticCurveTo(225,120,175,120);
ctx.fill();
ctx.stroke();

/* =========================
   FRESA GRANDE
========================= */
ctx.save();
ctx.translate(140, 145); 
ctx.rotate(-0.25);
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.bezierCurveTo(-25, -10, -35, 30, 0, 50); 
ctx.bezierCurveTo(35, 30, 25, -10, 0, 0); 
ctx.fillStyle = "#ff5e5e"; 
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;
ctx.stroke();

// Hojas Fresa
ctx.fillStyle = "#4ade80";
const angulosHojas = [-0.8, -0.3, 0.3, 0.8];
angulosHojas.forEach(angulo => {
    ctx.save();
    ctx.rotate(angulo);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-8, -15, 0, -22); 
    ctx.quadraticCurveTo(8, -15, 0, 0);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
});

// Semillas
ctx.fillStyle = "white";
[{x:-8,y:15},{x:8,y:15},{x:0,y:25},{x:-12,y:32}].forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();
});
ctx.restore();

/* =========================
   POPOTE
========================= */
ctx.save();
ctx.translate(200, 170); 
ctx.rotate(0.3); 
ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.rect(0, -145, 12, 145);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "#ffd60a";
for (let i = 0; i < 7; i++) {
    let yOffset = -20 - (i * 20);
    ctx.beginPath();
    ctx.moveTo(0, yOffset);
    ctx.lineTo(12, yOffset - 10);
    ctx.lineTo(12, yOffset - 3);
    ctx.lineTo(0, yOffset + 7);
    ctx.closePath();
    ctx.fill();
}
ctx.restore();

/* =========================
   ESTRELLA
========================= */
ctx.save();
ctx.translate(200, 155); 
ctx.rotate(-0.1); 
ctx.beginPath();
for (let i = 0; i < 10; i++) {
    let r = (i % 2 === 0) ? 25 : 12;
    let a = (Math.PI / 5) * i;
    ctx.lineTo(r * Math.sin(a), r * -Math.cos(a));
}
ctx.closePath();
ctx.fillStyle = "#ffe066";
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;
ctx.lineJoin = "round";
ctx.stroke();
ctx.restore();

/* =========================
   ARÁNDANO
========================= */
ctx.beginPath();
ctx.arc(240,170,12,0,Math.PI*2);
ctx.fillStyle="#6a4c93";
ctx.fill();
ctx.stroke();

/* =========================
   CONFETI Y BRILLO FINAL
========================= */
let colores=["#ff8fab","#90dbf4","#fcd34d","#cdb4db","#a0e7e5"];
for(let i=0;i<12;i++){
    ctx.beginPath();
    ctx.arc(70+(i*22),460,6,0,Math.PI*2);
    ctx.fillStyle=colores[i%5];
    ctx.fill();
}

ctx.beginPath();
ctx.arc(360,455,14,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,255,0.6)";
ctx.fill();