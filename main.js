const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
  constructor(position, velocity) {
    this.position = position;
    this.velocity = velocity;
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 50, 150);
  }
  update() {
    this.draw();
    this.position.y += 10;
  }
}

const player = new Sprite(
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  }
);
player.draw();

const enemy = new Sprite(
  {
    x: 400,
    y: 100,
  },
  {
    x: 0,
    y: 0,
  }
);

enemy.draw();

function animate() {
  window.requestAnimationFrame(animate);

  // Clear the canvas
  c.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw the player
  player.update();
  //   player.draw();

  // Update and draw the enemy
  enemy.update();
  //   enemy.draw();
}
animate();

console.log(player);
console.log(enemy);
