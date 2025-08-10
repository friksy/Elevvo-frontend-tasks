const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');
sidebar.classList.add('open');
function update() {
  if (window.innerWidth < 700) {
    if (!sidebar.classList.contains('open')) sidebar.classList.remove('closed');
  } else {
    sidebar.classList.remove('closed');
  }
}
toggle.addEventListener('click', ()=> {
  if (window.innerWidth < 700) {
    sidebar.classList.toggle('open');
  } else {
    sidebar.classList.toggle('closed');
  }
});
window.addEventListener('resize', update);
update();
