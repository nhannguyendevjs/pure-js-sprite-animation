let playerState = 'idle';
const dropDown = document.getElementById('animations');
dropDown.addEventListener('change', (e) => {
  playerState = e.target.value;
});

const canvas = document.getElementById('appCanvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = 600);
const height = (canvas.height = 600);

const spriteWidth = 575;
const spriteHeight = 523;

let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = {};
const animationStates = [
  {
    name: 'idle',
    frames: 7,
  },
  {
    name: 'jump',
    frames: 7,
  },
  {
    name: 'fall',
    frames: 7,
  },
  {
    name: 'run',
    frames: 9,
  },
  {
    name: 'dizzy',
    frames: 11,
  },
  {
    name: 'sit',
    frames: 5,
  },
  {
    name: 'roll',
    frames: 7,
  },
  {
    name: 'bite',
    frames: 7,
  },
  {
    name: 'ko',
    frames: 12,
  },
  {
    name: 'gethit',
    frames: 4,
  },
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let position = j * spriteWidth;
    let frame = { x: position, y: spriteHeight * index };
    frames.loc.push(frame);
  }
  spriteAnimations[state.name] = frames;
});

console.log(spriteAnimations);

const player = new Image();
player.src = 'assets/shadow_dog.png';

function animate() {
  ctx.clearRect(0, 0, width, height);
  const position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
  const frameX = spriteWidth * position;
  const frameY = spriteAnimations[playerState].loc[position].y;
  ctx.drawImage(player, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
