/* ============================================
   FARREL BREST — PORTFOLIO v3
   Renders projects from JSON
   ============================================ */

(function () {
  'use strict';

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Render projects
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  fetch('projects.json')
    .then((res) => {
      if (!res.ok) throw new Error('Could not load projects.json');
      return res.json();
    })
    .then((projects) => {
      if (!Array.isArray(projects)) return;
      grid.innerHTML = projects.map(renderCard).join('');
    })
    .catch((err) => {
      console.error(err);
      grid.innerHTML = '<p style="color:var(--text-muted)">Projects could not be loaded.</p>';
    });

  function renderCard(p, i) {
    const safe = (s) => String(s || '').replace(/[<>"']/g, (c) => ({
      '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));

      return `
      <article class="project-card" style="--i:${i}" data-id="${safe(p.id)}">
        <div class="project-card__head">
          <span class="project-card__company">${safe(p.company)}</span>
        </div>

        <h3 class="project-card__title">${safe(p.title)}</h3>

        <p class="project-card__desc">${safe(p.description)}</p>

        <a class="project-card__cta" href="${safe(p.url)}" target="_blank" rel="noopener">
          ${safe(p.cta)} <span class="arrow" aria-hidden="true">→</span>
        </a>
      </article>
    `;
  }
})();
