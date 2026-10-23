// Small enhancements used across the site. Everything degrades gracefully without JS.
(function () {
  // Thousands separators for numbers written by Jekyll (e.g. 35661 -> 35,661).
  document.querySelectorAll('[data-crowd]').forEach(function (el) {
    var n = parseInt(el.textContent, 10);
    if (!isNaN(n)) el.textContent = n.toLocaleString('en-US');
  });

  // YouTube embeds load only when clicked (faster page, no tracking until then).
  document.querySelectorAll('.video-lite').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + btn.getAttribute('data-video') + '?autoplay=1&rel=0';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.title = 'Video';
      btn.replaceWith(iframe);
    });
  });

  // Light/dark switch: remembers the choice and tells maps and charts to redraw.
  function syncToggles() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.theme-toggle').forEach(function (b) {
      b.innerHTML = dark ? '<i class="fa fa-sun-o"></i>' : '<i class="fa fa-moon-o"></i>';
      b.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#151311' : '#faf8f5');
  }
  document.querySelectorAll('.theme-toggle').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncToggles();
      document.dispatchEvent(new Event('themechange'));
    });
  });
  syncToggles();

  // Navbar gets a solid background once the page is scrolled.
  var nav = document.querySelector('.site-nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
