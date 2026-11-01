/* Adds the hamburger button to .navbar. Without JS the links simply wrap, as before. */
(function () {
  var nav = document.querySelector('.navbar');
  var links = nav && nav.querySelector('.nav-links');
  if (!links) return;

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-controls', 'nav-links');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'Open menu');
  btn.innerHTML = '<span></span><span></span><span></span>';

  links.id = 'nav-links';
  nav.insertBefore(btn, links);
  nav.classList.add('has-toggle');

  function setOpen(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  btn.addEventListener('click', function () {
    setOpen(!nav.classList.contains('open'));
  });

  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      btn.focus();
    }
  });
})();
