const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.2;

class Sprite {
  constructor(position, velocity) {
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 50, this.height);
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    } else {
      this.velocity.y += gravity;
    }
  }
}

const player = new Sprite(
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 10,
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

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);

  c.fillStyle = "black";
  // Clear the canvas
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Update and draw the player
  player.update();
  //   player.draw();

  // Update and draw the enemy
  enemy.update();
  //   enemy.draw();

  if (keys.a.pressed) {
    player.velocity.x = -1;
  } else if (keys.d.pressed) {
    player.velocity.x = 1;
  }
}
animate();

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      player.velocity.x = 1;
    case "a":
      player.velocity.x = -1;
      break;
  }
  console.log(event.key);
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      player.velocity.x = 1;
      break;
    case "a":
      player.velocity.x = -1;
      break;
  }
  console.log(event.key);
});

console.log(player);
console.log(enemy);
