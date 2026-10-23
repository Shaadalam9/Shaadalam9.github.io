// Publication list: type filters, lazily loaded BibTeX and copy buttons.
(function () {
  // Filter chips: show entries of one type, hide sections that end up empty.
  var chips = document.querySelectorAll('.pub-filter');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var filter = chip.getAttribute('data-filter');
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('active', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      document.querySelectorAll('.pub-group').forEach(function (group) {
        var visible = 0;
        group.querySelectorAll('.publication-entry').forEach(function (entry) {
          var show = filter === 'all' || entry.getAttribute('data-type') === filter;
          entry.hidden = !show;
          if (show) visible++;
        });
        group.hidden = visible === 0;
      });
    });
  });

  // BibTeX: fetch the entry's .txt file the first time its box is shown.
  function loadBib(pre) {
    if (pre.getAttribute('data-loaded')) return;
    pre.setAttribute('data-loaded', '1');
    fetch(pre.getAttribute('data-bib-src'))
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(function (text) { pre.textContent = text.trim(); })
      .catch(function () {
        pre.textContent = 'Could not load BibTeX.';
        pre.removeAttribute('data-loaded');
      });
  }

  document.querySelectorAll('.pub-bib pre').forEach(function (pre) {
    var box = pre.closest('.collapse');
    if (box.classList.contains('show')) loadBib(pre);
    box.addEventListener('show.bs.collapse', function () { loadBib(pre); });
  });

  document.querySelectorAll('.pub-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.parentNode.querySelector('pre').textContent;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
      });
    });
  });
})();

// "Download all": join the BibTeX of every published entry on the page into one file.
(function () {
  var link = document.querySelector('.pub-bib-all');
  if (!link) return;
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var srcs = [];
    document.querySelectorAll('.publication-entry:not([data-type="in-prep"]) .pub-bib pre').forEach(function (pre) {
      srcs.push(pre.getAttribute('data-bib-src'));
    });
    Promise.all(srcs.map(function (src) {
      return fetch(src).then(function (r) { return r.ok ? r.text() : ''; }).catch(function () { return ''; });
    })).then(function (texts) {
      var bib = texts.map(function (t) { return t.trim(); }).filter(Boolean).join('\n\n') + '\n';
      var url = URL.createObjectURL(new Blob([bib], { type: 'application/x-bibtex' }));
      var a = document.createElement('a');
      a.href = url;
      a.download = 'alam.bib';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
  });
})();
