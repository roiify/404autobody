/* slide-out nav drawer toggle (shared across sub-pages) */
(function(){
  var t=document.getElementById('navToggle'),d=document.getElementById('navDrawer'),b=document.getElementById('navBackdrop');
  if(!t)return;
  function set(o){document.body.classList.toggle('nav-open',o);t.setAttribute('aria-expanded',o);
    d.setAttribute('aria-hidden',!o);t.setAttribute('aria-label',o?'Close menu':'Open menu');}
  t.addEventListener('click',function(){set(!document.body.classList.contains('nav-open'));});
  b.addEventListener('click',function(){set(false);});
  addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
})();
