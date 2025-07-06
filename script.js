// 🔊 Voice Play
function playVoice() {
  document.getElementById("voice").play();
  document.getElementById("bgm").play();
}

// 🎂 Cake Cut Function
function cutCake() {
  const cake = document.getElementById("cake");
  const explosion = document.getElementById("explosion");
  const boom = document.getElementById("boom");
  const popup = document.getElementById("popup");
  const birthday = document.getElementById("birthday"); // 🎵 new line
  
  // 🔊 Play sounds
  boom.play(); // 💥 Firework sound
  birthday.play(); // 🎂 Happy Birthday voice
  
  // Show explosion
  explosion.style.display = "block";
  explosion.classList.add("boom");
  
  // Hide cake
  cake.style.display = "none";
  
  // Show love popup
  setTimeout(() => {
    popup.style.display = "block";
    launchFireworks();
  }, 1000);
  
  // Show final glowing text
  setTimeout(() => {
    document.getElementById("finalText").style.display = "block";
  }, 2500);
}

// 🎁 Gift Open
function openGift() {
  const gift = document.getElementById("gift");
  gift.innerHTML = "<p class='glow'>🎉 Tum meri sabse badi khushi ho! 🎉</p>";
}

// 🎆 Firework Canvas
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

let particles = [];

function createFirework() {
  const x = random(0, canvas.width);
  const y = random(0, canvas.height / 2);
  const count = 100;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: x,
      y: y,
      radius: 2,
      color: `hsl(${random(0, 360)}, 100%, 50%)`,
      dx: Math.cos((2 * Math.PI * i) / count) * random(1, 5),
      dy: Math.sin((2 * Math.PI * i) / count) * random(1, 5),
      life: 100,
    });
  }
}

function launchFireworks() {
  createFirework();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, index) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    p.radius *= 0.96;
    p.life -= 1;
    if (p.life <= 0) {
      particles.splice(index, 1);
    }
  });
  requestAnimationFrame(animate);
}
animate();