const audio=document.getElementById('audio'); 
const playBtn=document.getElementById('playBtn');

playBtn.addEventListener('click',()=>{
  if(audio.paused){audio.play(); playBtn.textContent='Pause';}
  else{audio.pause(); playBtn.textContent='Play';}
});

audio.addEventListener('ended',()=>playBtn.textContent='Play');
