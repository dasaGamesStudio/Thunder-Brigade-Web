const coords = { x: 0, y: 0 };

const trailers = document.querySelectorAll(".trailer");

const colors = [
  "#ff6738",
  "#ff7f3d",
  "#ff9547",
  "#fea954",
  "#fdbc66",
  "#fdcd7a",
  "#fdde90",
  "#ffeea8",
];

trailers.forEach(function (trailer, index) {
  trailer.x = 0;
  trailer.y = 0;
  trailer.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  console.log(e.clientX, e.clientY);

  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateTrails() {
  let x = coords.x;
  let y = coords.y;

  trailers.forEach(function (trailer, index) {
    //trailer.style.transform = `translate(${x - 12}px, ${y - 12}px)`;
    trailer.style.left = x + "px";
    trailer.style.top = y + "px";

    trailer.style.scale = (trailers.length - index) / trailers.length;

    trailer.x = x;
    trailer.y = y;

    const nextTrail = trailers[index + 1] || trailers[0];

    x += (nextTrail.x - x) * 0.5;
    y += (nextTrail.y - y) * 0.5;
  });
  requestAnimationFrame(animateTrails);
}

animateTrails();
