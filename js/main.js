/*
---------------------------------------------------------
Aplicación: Malteada Kawaii - Versión Final Exacta
Autor: Michelle Pacheco
Materia: Graficación por Computadora
Fecha: 2026
Descripción:
Reproducción lo más fiel posible de la imagen original
usando Canvas 2D.
---------------------------------------------------------
*/

const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

/* =========================
   FONDO EXACTO LILA
========================= */
ctx.fillStyle = "#cfc6e8";
ctx.fillRect(0, 0, 400, 500);

/* =========================
   NUBES
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
   SOMBRA INFERIOR
========================= */
ctx.beginPath();
ctx.ellipse(200,440,110,18,0,0,Math.PI*2);
ctx.fillStyle="rgba(120,100,180,0.2)";
ctx.fill();

/* =========================
   VASO (forma exacta)
========================= */
ctx.lineWidth=6;
ctx.strokeStyle="black";

ctx.beginPath();
ctx.moveTo(120,165);
ctx.quadraticCurveTo(95,390,200,430);
ctx.quadraticCurveTo(305,390,280,165);
ctx.closePath();
ctx.fillStyle="#aee3eb";
ctx.fill();
ctx.stroke();

/* BORDE SUPERIOR */
ctx.beginPath();
ctx.ellipse(200,165,80,20,0,0,Math.PI*2);
ctx.fillStyle="#9dd9e3";
ctx.fill();
ctx.stroke();

/* =========================
   BRILLO LATERAL
========================= */
ctx.beginPath();
ctx.roundRect(145,220,18,140,12);
ctx.fillStyle="rgba(255,255,255,0.5)";
ctx.fill();

/* =========================
   LÍQUIDO ONDA REAL
========================= */
ctx.beginPath();
ctx.moveTo(135,220);
ctx.quadraticCurveTo(170,250,200,230);
ctx.quadraticCurveTo(230,210,265,220);
ctx.lineTo(250,390);
ctx.quadraticCurveTo(200,410,150,390);
ctx.closePath();
ctx.fillStyle="#f7b3c8";
ctx.fill();

/* PUNTOS BLANCOS DIFERENTES */
[ 
 {x:160,y:360,r:12},
 {x:200,y:345,r:8},
 {x:240,y:370,r:14},
 {x:180,y:385,r:6}
].forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();
});

/* =========================
   CARA EXACTA
========================= */
function ojo(x){
    ctx.beginPath();
    ctx.arc(x,300,20,0,Math.PI*2);
    ctx.fillStyle="black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x-6,292,7,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x+6,308,4,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();
}
ojo(170);
ojo(230);

/* BOCA PEQUEÑA */
ctx.beginPath();
ctx.moveTo(190,318);
ctx.quadraticCurveTo(200,328,210,318);
ctx.lineWidth=4;
ctx.stroke();

/* MEJILLAS */
ctx.beginPath();
ctx.arc(145,315,10,0,Math.PI*2);
ctx.arc(255,315,10,0,Math.PI*2);
ctx.fillStyle="#ff8fab";
ctx.fill();

/* =========================
   CREMA 3 CAPAS + PICO
========================= */
let capas=[60,45,30];
capas.forEach((r,i)=>{
    ctx.beginPath();
    ctx.arc(200,170-(i*25),r,Math.PI,0);
    ctx.fillStyle="#ffc2d1";
    ctx.fill();
    ctx.stroke();
});

/* PICO SUPERIOR */
ctx.beginPath();
ctx.moveTo(200,95);
ctx.quadraticCurveTo(220,120,180,120);
ctx.fill();
ctx.stroke();

/* =========================
   FRESA
========================= */
ctx.beginPath();
ctx.arc(160,150,18,0,Math.PI*2);
ctx.fillStyle="#ff4d6d";
ctx.fill();
ctx.stroke();

/* HOJAS */
ctx.fillStyle="green";
ctx.beginPath();
ctx.arc(150,135,6,0,Math.PI*2);
ctx.arc(160,130,6,0,Math.PI*2);
ctx.arc(170,135,6,0,Math.PI*2);
ctx.fill();

/* SEMILLAS */
for(let i=0;i<8;i++){
    ctx.beginPath();
    ctx.arc(150+(i*3),148-(i%3*5),2,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();
}

/* =========================
   ESTRELLA AMARILLA
========================= */
function estrella(cx,cy){
    ctx.save();
    ctx.translate(cx,cy);
    ctx.rotate(0.4);
    let spikes=5, outer=15, inner=7;
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
   ARÁNDANO
========================= */
ctx.beginPath();
ctx.arc(245,165,12,0,Math.PI*2);
ctx.fillStyle="#6a4c93";
ctx.fill();
ctx.stroke();

/* ESTRELLA NEGRA INTERNA */
estrella(245,165);

/* =========================
   POPOTE
========================= */
ctx.lineWidth=8;
ctx.strokeStyle="black";
ctx.beginPath();
ctx.moveTo(250,120);
ctx.lineTo(285,65);
ctx.stroke();

ctx.lineWidth=6;
ctx.strokeStyle="white";
ctx.beginPath();
ctx.moveTo(250,120);
ctx.lineTo(285,65);
ctx.stroke();

/* FRANJAS */
for(let i=0;i<4;i++){
    ctx.beginPath();
    ctx.moveTo(258+(i*10),110-(i*15));
    ctx.lineTo(270+(i*10),100-(i*15));
    ctx.strokeStyle="#ffd60a";
    ctx.lineWidth=4;
    ctx.stroke();
}

/* =========================
   CONFETI VARIADO
========================= */
let colores=["#ff8fab","#90dbf4","#fcd34d","#cdb4db","#a0e7e5"];

for(let i=0;i<10;i++){
    ctx.beginPath();
    ctx.arc(80+(i*25),460+Math.random()*5,6,0,Math.PI*2);
    ctx.fillStyle=colores[i%5];
    ctx.fill();
}

/* CUADRITO */
ctx.fillStyle="#ffafcc";
ctx.fillRect(100,455,12,12);

/* ESTRELLA BLANCA DECORATIVA */
ctx.beginPath();
ctx.arc(360,455,14,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,255,0.5)";
ctx.fill();