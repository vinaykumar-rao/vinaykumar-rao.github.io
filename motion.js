(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const frame = document.querySelector('.portrait-frame');
  const hero = document.querySelector('#home');
  document.querySelectorAll('.certification-row[href$=".pdf"]').forEach(link=>{
    const actions=document.createElement('div');actions.className='certificate-actions';
    const download=document.createElement('a');download.href=link.getAttribute('href');download.download='';download.textContent='Download certificate PDF ↓';
    actions.append(download);link.after(actions);
  });
  const eyes=document.createElement('div');
  eyes.className='avatar-eyes'; eyes.setAttribute('aria-hidden','true');
  eyes.innerHTML='<span class="avatar-eye eye-left"><i></i></span><span class="avatar-eye eye-right"><i></i></span>';
  frame.append(eyes);
  let pending = 0;
  function reset(){for(const p of ['--rx','--ry','--px','--py','--eye-x','--eye-y']) frame.style.removeProperty(p);}
  window.addEventListener('pointermove', e => {
    if(reduced.matches || e.pointerType !== 'mouse') return;
    cancelAnimationFrame(pending);
    pending=requestAnimationFrame(() => {
      const r=frame.getBoundingClientRect();
      const x=Math.max(-1,Math.min(1,(e.clientX-r.left-r.width/2)/(r.width/2)));
      const y=Math.max(-1,Math.min(1,(e.clientY-r.top-r.height/2)/(r.height/2)));
      frame.style.setProperty('--rx',`${-y*5}deg`);frame.style.setProperty('--ry',`${x*9}deg`);
      frame.style.setProperty('--px',`${x*5}px`);frame.style.setProperty('--py',`${y*3}px`);
      frame.style.setProperty('--eye-x',`${x*17}%`);frame.style.setProperty('--eye-y',`${y*12}%`);
    });
  });
  document.documentElement.addEventListener('pointerleave',()=>{cancelAnimationFrame(pending);reset()});
  reduced.addEventListener('change',reset);
  const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
  let scrollPending=false;
  function updateScroll(){scrollPending=false;const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max>0?scrollY/max:0})`;}
  addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(updateScroll)}},{passive:true});updateScroll();
  document.querySelectorAll('.project-card,.skill-cloud').forEach(card=>{
    card.addEventListener('pointermove',e=>{if(reduced.matches||e.pointerType!=='mouse')return;const r=card.getBoundingClientRect();card.style.setProperty('--spot-x',`${e.clientX-r.left}px`);card.style.setProperty('--spot-y',`${e.clientY-r.top}px`)});
  });
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible')}else if(e.boundingClientRect.top>innerHeight){e.target.classList.remove('is-visible')}}),{threshold:.04});
    document.querySelectorAll('.section-label,.about-avatar,.about-lead h2,.about-lead p,.about-lead button,.note-card,.section-heading-row,.skill-tabs,.skill-cloud,.experience-item,.project-card,.education-card,.certification-row,.contact-copy h2,.contact-copy>p,.contact-links a,.contact-form,.site-footer').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
    document.querySelectorAll('.contact-links a').forEach((el,i)=>el.style.setProperty('--reveal-delay',`${i*100}ms`));
    document.querySelectorAll('.note-card').forEach((el,i)=>el.style.setProperty('--step-delay',`${i*180}ms`));
    document.documentElement.classList.add('motion-ready');
  }
  // Touch screens have no hover: use a gentle idle gaze and touch response instead.
  const touch=matchMedia('(hover: none)');
  let idleTimer;
  function touchMotion(){
    clearInterval(idleTimer);frame.classList.toggle('touch-avatar',touch.matches&&!reduced.matches);
    if(touch.matches&&!reduced.matches){let step=0;idleTimer=setInterval(()=>{if(document.hidden||frame.getBoundingClientRect().bottom<0)return;step++;frame.style.setProperty('--eye-x',`${Math.sin(step)*12}%`);frame.style.setProperty('--eye-y',`${Math.cos(step)*6}%`)},1600)}
  }
  touchMotion();reduced.addEventListener('change',touchMotion);touch.addEventListener('change',touchMotion);
  frame.addEventListener('pointerdown',e=>{if(reduced.matches||e.pointerType==='mouse')return;const r=frame.getBoundingClientRect();frame.style.setProperty('--eye-x',`${((e.clientX-r.left)/r.width-.5)*32}%`);frame.style.setProperty('--eye-y',`${((e.clientY-r.top)/r.height-.5)*22}%`)});
  const submission=document.querySelector('#submission-dialog');
  new MutationObserver(()=>{if(submission.open&&!reduced.matches)submission.animate([{opacity:0,transform:'translateY(20px) scale(.94)'},{opacity:1,transform:'none'}],{duration:400,easing:'cubic-bezier(.2,.8,.2,1)'})}).observe(submission,{attributes:true,attributeFilter:['open']});
})();
