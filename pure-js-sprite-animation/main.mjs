const canvas = document.getElementById('appCanvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = 600);
const height = (canvas.height = 600);

const player = new Image();
player.src = 'assets/shadow_dog.png';

function animate() {
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(player, 0, 0, width, height);
  requestAnimationFrame(animate);
}

animate();
