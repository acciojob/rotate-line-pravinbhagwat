const line = document.getElementById('line');

let angle = 0;

function rotateLine() {

  angle++;

  line.style.transform = `rotate(${angle}deg)`;

  requestAnimationFrame(rotateLine);
}

rotateLine();
