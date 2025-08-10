const form = document.getElementById('contact');
const status = document.getElementById('status');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name').trim();
  const email = data.get('email').trim();
  if (!name || !email) { status.textContent = 'Please fill required fields.'; return; }
  if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) { status.textContent = 'Please enter a valid email.'; return; }
  status.textContent = 'Sending...';
  setTimeout(()=>{ status.textContent = 'Message sent successfully! (demo)'; form.reset(); }, 800);
});
