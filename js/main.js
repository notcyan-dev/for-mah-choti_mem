const slider=document.getElementById('slider'); 
const knob=document.getElementById('knob'); 
let startX=null,curLeft=8;
const maxLeft=()=>Math.max(slider.clientWidth-knob.clientWidth-8,0);

function onStart(e){const t=e.touches?e.touches[0]:e; startX=t.clientX;}
function onMove(e){if(startX===null)return; const t=e.touches?e.touches[0]:e; const dx=t.clientX-startX; let left=Math.max(8,Math.min(curLeft+dx,maxLeft())); knob.style.left=left+'px';}
function onEnd(e){if(startX===null)return; const left=parseFloat(knob.style.left||getComputedStyle(knob).left); if(left>=maxLeft()*0.85){knob.style.left=(maxLeft()+6)+'px';knob.style.transition='left .18s'; setTimeout(()=>location.href='tic-tac-toe.html',300);}else{knob.style.transition='left .2s'; knob.style.left='8px';} startX=null; curLeft=8; setTimeout(()=>knob.style.transition='',250);}
knob.addEventListener('touchstart',onStart); knob.addEventListener('touchmove',onMove); knob.addEventListener('touchend',onEnd);
knob.addEventListener('mousedown',onStart); document.addEventListener('mousemove',onMove); document.addEventListener('mouseup',onEnd);
