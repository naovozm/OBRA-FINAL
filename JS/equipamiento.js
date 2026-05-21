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



const video = document.getElementById("bgVideo");
const source = document.getElementById("videoSource");

function cambiarVideo() {

  if (window.innerWidth <= 768) {
    source.src = "../IMG/EquipateTLF.mp4";
  } else {
    source.src = "../IMG/Equipate_Intro.mp4";
  }

  video.load();
}

cambiarVideo();

window.addEventListener("resize", cambiarVideo);