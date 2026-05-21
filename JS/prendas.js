const intros = document.querySelectorAll('.intro-hombre, .intro-mujer, .intro-kids');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.3
});

intros.forEach(intro => observer.observe(intro));