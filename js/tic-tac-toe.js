const board=document.getElementById('board'); 
const cells=Array.from(board.querySelectorAll('.cell')); 
const confettiContainer=document.getElementById('confetti');

[0,2,6,8].forEach(i=>{cells[i].textContent='🍫'; cells[i].classList.add('filled');});

cells[4].addEventListener('click',()=>{
  if(cells[4].textContent.trim()!=='')return;
  cells[4].textContent='🍫'; 
  cells[4].classList.add('filled'); 
  showCongrats();
});

function showCongrats(){
  for(let i=0;i<18;i++){
    const el=document.createElement('div');
    el.style.position='absolute';
    el.style.left=(50+(Math.random()*60-30))+'%';
    el.style.top=(40+Math.random()*20)+'%';
    el.style.width='10px';
    el.style.height='10px';
    el.style.borderRadius='3px';
    el.style.background=['#ff8fb1','#ffd3e6','#ffb7d0'][Math.floor(Math.random()*3)];
    el.style.opacity='0.95';
    el.style.transform='translate(-50%,-50%)';
    el.style.transition='transform 900ms cubic-bezier(.2,.8,.2,1), opacity 900ms';
    confettiContainer.appendChild(el);
    requestAnimationFrame(()=>{el.style.transform=`translate(${(Math.random()*160-80)}px, ${(Math.random()*260-20)}px) rotate(${Math.random()*360}deg)`; el.style.opacity='0';});
  }
  const overlay=document.createElement('div');
  overlay.style.position='fixed';overlay.style.inset=0;overlay.style.display='flex';overlay.style.alignItems='center';overlay.style.justifyContent='center';
  overlay.style.background='linear-gradient(180deg, rgba(255,240,245,0.8), rgba(255,245,247,0.6))';
  overlay.innerHTML=`<div style="padding:18px 22px;border-radius:16px;background:white;box-shadow:0 10px 30px rgba(200,90,120,0.08);text-align:center;font-size:18px">Congratulations ❤️<div style='font-size:13px;margin-top:8px'>You did it!</div></div>`;
  document.body.appendChild(overlay);
  setTimeout(()=>location.href='message.html',1600);
}
