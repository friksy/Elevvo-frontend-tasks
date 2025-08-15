// Light/Dark toggle
const btn = document.getElementById('theme-toggle');
btn?.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
});
