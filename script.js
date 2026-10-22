// Eeshan Garg — portfolio interactions
// Mobile nav, scroll progress, reveal, counters, typewriter roles,
// hero-card tilt and soft parallax on the background blobs.
// Everything switches off for prefers-reduced-motion.
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* mobile nav */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* scroll progress + blob parallax */
  var bar = document.getElementById('scrollProgress');
  var blobs = document.querySelectorAll('.blob');
  var ticking = false;
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (bar && max > 0) bar.style.width = (h.scrollTop / max * 100) + '%';
    if (!reduceMotion) {
      var y = h.scrollTop;
      blobs.forEach(function (b, i) {
        b.style.translate = '0 ' + (y * (0.03 + i * 0.02)) + 'px';
      });
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* reveal on scroll */
  var items = document.querySelectorAll('.reveal');
  function showAll() { items.forEach(function (el) { el.classList.add('visible'); }); }
  if ('IntersectionObserver' in window && items.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else { showAll(); }

  /* animated counters */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
    if (reduceMotion) { el.textContent = target.toFixed(decimals); return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('.count');
  if ('IntersectionObserver' in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animateCount(entry.target); cio.unobserve(entry.target); }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { cio.observe(el); });
  } else { counters.forEach(animateCount); }

  /* typewriter roles */
  var roleEl = document.getElementById('roleText');
  if (roleEl && !reduceMotion) {
    var roles = ['SOC Analyst', 'Digital Forensics Analyst', 'Incident Responder', 'Threat Hunter', 'Published Researcher — UASAF', 'Red Team Analyst (CRTA)'];
    var ri = 0, ci = roles[0].length, deleting = false;
    roleEl.textContent = roles[0];
    function tick() {
      var word = roles[ri];
      if (!deleting) {
        ci++;
        roleEl.textContent = word.slice(0, ci);
        if (ci === word.length) { deleting = true; return setTimeout(tick, 1700); }
        return setTimeout(tick, 55);
      }
      ci--;
      roleEl.textContent = word.slice(0, ci);
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; return setTimeout(tick, 300); }
      return setTimeout(tick, 28);
    }
    setTimeout(tick, 1800);
  }

  /* hero card tilt */
  var card = document.getElementById('heroCard');
  if (card && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = 'rotate(1.2deg) perspective(900px) rotateY(' + (x * 7) + 'deg) rotateX(' + (-y * 7) + 'deg)';
    });
    card.addEventListener('mouseleave', function () { card.style.transform = 'rotate(1.2deg)'; });
  }
})();
