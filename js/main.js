// Scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Project filter
function filterProjects(type){
  document.querySelectorAll('.project').forEach(p=>{
    p.style.display =
      (type === 'all' || p.classList.contains(type)) ? 'block' : 'none';
  });
}
