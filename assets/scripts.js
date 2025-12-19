(function(){
  const $ = (s, p=document)=>p.querySelector(s);
  const $$ = (s, p=document)=>Array.from(p.querySelectorAll(s));
  const btn = $('#hamburger');
  const mm = $('#mobileMenu');
  if(btn && mm){
    btn.addEventListener('click', ()=>{
      const open = mm.style.display === 'block';
      mm.style.display = open ? 'none' : 'block';
      btn.setAttribute('aria-expanded', String(!open));
    });
    document.addEventListener('click', (e)=>{
      if(!mm.contains(e.target) && e.target !== btn){
        mm.style.display = 'none';
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const toast = $('#toast');
  const showToast = (title, msg)=>{
    if(!toast) return;
    $('#toastTitle').textContent = title;
    $('#toastMsg').textContent = msg;
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'), 5200);
  };

  // contact form (static site demo)
  const form = $('#contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      showToast('Message queued', 'This is a static demo site. Wire this form to your backend or CRM to receive messages.');
      form.reset();
    });
  }

  // smooth scroll for in-page anchors
  $$('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      const el = $(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
})();
