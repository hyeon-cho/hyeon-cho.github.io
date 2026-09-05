(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const filter = document.querySelector('.research-filter');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const additional = document.getElementById('content-research-co');
  const heading = document.getElementById('research-title');
  const status = document.getElementById('research-status');
  const showAll = document.querySelector('[data-show-all]');
  const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const research = document.getElementById('research');
  const recent = document.getElementById('recent');

  function placeSelectionLens() {
    const selected = buttons.find(button => button.getAttribute('aria-pressed') === 'true');
    filter.style.setProperty('--segment-x', `${selected.offsetLeft}px`);
    filter.style.setProperty('--segment-width', `${selected.offsetWidth}px`);
  }

  function select(view, announce = true) {
    const all = view === 'all';
    additional.hidden = !all;
    heading.textContent = all ? 'All publications' : 'Selected research';
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === view)));
    showAll.hidden = all;
    placeSelectionLens();
    requestAnimationFrame(updateHeader);
    if (announce) status.textContent = all ? 'Showing all 6 publications.' : 'Showing 4 selected publications.';
  }

  function revealAnchor(scroll = false) {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target) return;
    if (target === additional || additional.contains(target)) select('all', false);
    let ancestor = target.parentElement;
    while (ancestor) {
      if (ancestor.tagName === 'DETAILS') ancestor.open = true;
      ancestor = ancestor.parentElement;
    }
    if (scroll) requestAnimationFrame(() => target.scrollIntoView({block: 'start'}));
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => select(button.dataset.filter));
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
      else if (event.key === 'ArrowLeft') next = (index + buttons.length - 1) % buttons.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = buttons.length - 1;
      else return;
      event.preventDefault();
      buttons[next].focus({preventScroll: true});
      select(buttons[next].dataset.filter);
    });
  });
  showAll.addEventListener('click', () => {
    select('all');
    additional.querySelector('h3 a').focus({preventScroll: true});
    additional.scrollIntoView({block: 'start'});
  });
  filter.hidden = false;
  select('selected', false);
  document.documentElement.classList.add('has-publication-filter');
  requestAnimationFrame(() => filter.classList.add('is-ready'));
  // Re-measure for responsive layouts and enlarged text; the labels set the lens size.
  if ('ResizeObserver' in window) {
    const resize = new ResizeObserver(placeSelectionLens);
    buttons.forEach(button => resize.observe(button));
  }
  window.addEventListener('resize', () => { placeSelectionLens(); updateHeader(); });
  revealAnchor(Boolean(location.hash));
  window.addEventListener('hashchange', () => revealAnchor(true));
  // Anchor links still reveal their destination when the hash is already current.
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (link && link.getAttribute('href') === location.hash) revealAnchor(true);
  });

  let ticking = false;
  function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
    const boundary = Math.max(header.getBoundingClientRect().bottom + 36, parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) + 2);
    const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 5;
    let current = null;
    if (research.getBoundingClientRect().top <= boundary) current = '#research';
    if (recent.getBoundingClientRect().top <= boundary || (atEnd && recent.getBoundingClientRect().top < window.innerHeight)) current = '#recent';
    sectionLinks.forEach(link => {
      if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(updateHeader); ticking = true; }
  }, {passive: true});
  updateHeader();
})();
