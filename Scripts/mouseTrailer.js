const coords = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const particleCount = 15;

const trailers = [];

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("div");
  particle.classList.add("trailer");
  document.body.appendChild(particle);
  trailers[i] = particle;
}

trailers.forEach(function (trailer, index) {
  trailer.x = 0;
  trailer.y = 0;
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateTrails() {
  let x = coords.x;
  let y = coords.y;

  trailers.forEach(function (trailer, index) {
    trailer.style.left = x + "px";
    trailer.style.top = y + "px";

    trailer.style.scale = (trailers.length - index) / trailers.length;

    trailer.x = x;
    trailer.y = y;

    const nextTrail = trailers[index + 1] || trailers[0];

    x += (nextTrail.x - x) * 0.4;
    y += (nextTrail.y - y) * 0.4;
  });
  requestAnimationFrame(animateTrails);
}

animateTrails();
