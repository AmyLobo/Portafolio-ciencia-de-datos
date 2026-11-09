document.documentElement.classList.add('js');
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
/* Para poner tus imágenes o videos: escribe la ruta o URL en "m" (3 por proyecto). */
const P=[
 {n:"KESO",r:"Coordinación y Bases de Datos",t:"Base de datos relacional para una pastelería en línea",c:["MySQL","Modelo relacional","Git y GitHub","Jira"],col:["#ffd1bf","#ffc9dd","#d9f36b"],m:["img/keso-bd-1.jpg","img/keso-bd-2.jpg","img/keso-bd-3.jpg"],
  d:["Diseño y gestión, junto al equipo técnico, de la base de datos en MySQL para catálogo, clientes y pedidos","Modelo de 14 tablas: productos, clientes y direcciones, carrito, ventas, pedidos personalizados y empleados con roles","Calidad y consistencia de los datos entre la web y la base, con pruebas funcionales y validación de registros","Equipo ágil de 10 personas con Git, GitHub y Jira, entrega en 3 meses"]},
 {n:"OXXO",r:"Análisis de datos e indicadores",t:"Análisis estratégico de sostenibilidad",c:["Análisis de reportes","Detección de patrones","KPIs"],col:["#d9c8ff","#ffe9a8","#ffc9dd"],m:["img/oxxo-1.jpg","img/oxxo-2.jpg","img/oxxo-3.jpg"],
  d:["Análisis de tres ciclos anuales de reportes operativos y financieros","Detección de patrones y áreas de oportunidad","Definición de KPIs orientados a decisiones estratégicas"]},
 {n:"SYNAPSE",r:"Coordinación y Front-End",t:"Plataforma web deportiva",c:["Git y GitHub","HTML y CSS","JavaScript","Bootstrap"],col:["#c9f2dc","#bfe3ff","#d9f36b"],m:["img/synapse-1.jpg","img/synapse-2.jpg","img/synapse-3.jpg"],
  d:["Integración de componentes web con HTML5, CSS3, JavaScript y Bootstrap","Flujo de trabajo colaborativo en Git y GitHub","Entregas limpias y puntuales"]}
];
const isV=u=>/\.(mp4|webm|mov)(\?|$)|^data:video/i.test(u);
const med=(u,i)=>!u?'<div class="ph">Tu imagen o video aquí</div>':isV(u)?`<video src="${u}" autoplay muted loop playsinline></video>`:`<img src="${u}" alt="Captura ${i+1}" loading="lazy">`;
const stage=$('#stage');
stage.innerHTML=P.map((p,i)=>`<article class="slide${i?'':' on'}" style="--a:${p.col[0]};--b:${p.col[1]};--c:${p.col[2]}" aria-label="${p.n}">
<div class="info"><p class="role serif">${p.r}</p><p class="line">${p.t}</p><div class="chips">${p.c.map(x=>`<span>${x}</span>`).join('')}</div><button class="more-b" aria-expanded="false">Ver detalles</button><ul class="more">${p.d.map(x=>`<li>${x}</li>`).join('')}</ul></div>
<div class="cards">${p.m.map((u,j)=>`<figure class="card k${j}">${med(u,j)}</figure>`).join('')}</div>
<h3 class="name">${p.n}</h3></article>`).join('')+
`<div class="ctrl">${P.map((p,i)=>`<button class="tab${i?'':' on'}">${p.n}</button>`).join('')}<div class="arr"><button id="sp" aria-label="Proyecto anterior">←</button><button id="sn" aria-label="Proyecto siguiente">→</button></div></div>`;
let cur=0;
function go(n){cur=(n+P.length)%P.length;
 $$('.slide',stage).forEach((s,i)=>{s.classList.toggle('on',i===cur);if(i!==cur){s.classList.remove('open');$('.more-b',s).setAttribute('aria-expanded','false')}});
 $$('.tab',stage).forEach((t,i)=>t.classList.toggle('on',i===cur));
 stage.classList.remove('hold')}
$$('.tab',stage).forEach((t,i)=>t.onclick=()=>go(i));
$('#sp').onclick=()=>go(cur-1);$('#sn').onclick=()=>go(cur+1);
stage.addEventListener('animationend',e=>{if(e.animationName==='fill')go(cur+1)});
stage.addEventListener('click',e=>{const b=e.target.closest('.more-b');if(!b)return;const s=b.closest('.slide'),o=s.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'Cerrar':'Ver detalles';stage.classList.toggle('hold',o)});
stage.addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)});
let x0=null;stage.addEventListener('pointerdown',e=>{x0=e.clientX});
stage.addEventListener('pointerup',e=>{if(x0!==null&&Math.abs(e.clientX-x0)>60)go(cur+(e.clientX<x0?1:-1));x0=null});
$$('.mq').forEach(m=>{const t=m.dataset.t;const h=t.includes('|')?t.split('|').map(x=>`<span>${x}</span>`).join(''):`<span>${t}</span>`;m.innerHTML=h+h+h+h;m.style.animationName='mq';});
$$('.mq').forEach(m=>{m.innerHTML=m.innerHTML.slice(0,m.innerHTML.length)});
const rail=$('#rail');$('#rp').onclick=()=>rail.scrollBy({left:-360,behavior:'smooth'});$('#rn').onclick=()=>rail.scrollBy({left:360,behavior:'smooth'});

const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.2}):null;
$$('.rv').forEach(el=>io?io.observe(el):el.classList.add('in'));
