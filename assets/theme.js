// rawcode — theme switcher + small enhancements
(function () {
  const THEMES = ['matrix', 'amber', 'ice', 'blood'];
  const KEY = 'rawcode-theme';

  function applyTheme(name) {
    if (name === 'matrix') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', name);
    }
    document.querySelectorAll('.theme-dot').forEach(dot => {
      dot.classList.toggle('active', dot.dataset.theme === name);
    });
    try { localStorage.setItem(KEY, name); } catch (e) {}
  }

  // restore theme ASAP (before paint via inline call too if you want)
  let saved = 'matrix';
  try { saved = localStorage.getItem(KEY) || 'matrix'; } catch (e) {}
  if (THEMES.includes(saved)) applyTheme(saved);

  document.addEventListener('DOMContentLoaded', () => {
    // bind theme dots
    document.querySelectorAll('.theme-dot').forEach(dot => {
      dot.addEventListener('click', () => applyTheme(dot.dataset.theme));
    });
    applyTheme(saved);

    // typed logo effect (only on home, only first visit per session)
    const logo = document.querySelector('.logo .logo-text');
    if (logo && !sessionStorage.getItem('rawcode-typed')) {
      const full = logo.textContent;
      logo.textContent = '';
      let i = 0;
      const tick = () => {
        if (i <= full.length) {
          logo.textContent = full.slice(0, i);
          i++;
          setTimeout(tick, 45);
        } else {
          try { sessionStorage.setItem('rawcode-typed', '1'); } catch (e) {}
        }
      };
      tick();
    }

    // konami code easter egg → toggles 'glitch' mode
    const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let pos = 0;
    document.addEventListener('keydown', (e) => {
      if (e.key === seq[pos]) {
        pos++;
        if (pos === seq.length) {
          document.body.classList.toggle('glitch');
          pos = 0;
        }
      } else { pos = 0; }
    });
  });
})();
