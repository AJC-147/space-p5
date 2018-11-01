const sketch = (width, height, props) => {
  return function (p5) {
    let value = props.value;

    const WORDS = [ "word", "letter" ];

var focus;
var field = [];
  var score = 0;
  let planetCrust;
  let planetMantle;
  let ship;

  p5.setup = () => {
  planetCrust = p5.color(100,149,237);
  planetMantle = p5.color(95,158,160);
  ship = p5.color(138,43,226);

  // field.push(new Asteroid(p5.random(width - 150) + 75, 0, p5.random(WORDS), p5.color(138,43,226));

  focus = null;
  };

  p5.draw = () => {
    p5.background(50);



      drawBase();
      drawLazer();
    	drawScore();
      handleField();


  }

  const handleField = () => {
    for (let i = field.length - 1; i >= 0; i--) {

        field[i].update();

        if (field[i].intact) {
          // astroid is still on-screen

          field[i].p5.draw();
        } else {
          // Astroid has been destroyed

          score += field[i].text.length;
          field.splice(i, 1); // delete from array
          focus = null;
        }
      }

      /* attempt new Astroid */
      // if (p5.frameCount % 60 === 0) { // every second
      //
    	// 	if (p5.random() > p5.map(score, 0, 1000, 0.8, 0.01)) { // more difficult as game progresses
      //
    	// 		field.push(new Asteroid(p5.random(width - 150) + 75, 0, p5.random(WORDS), p5.color(138,43,226)));
    	// 	}
    	// }
  }

const keyPressed = () => {
  if (focus) {
      // if we have honed in on a specific Asteroid

      focus.erode(p5.keyCode);
    } else {
      // find the astroid to target

     // focus = findAsteroid(p5.keyCode, field);

      if (focus) {
        focus.erode(p5.keyCode);
      }
    }
}

const drawBase = () => {
  /* planet */
p5.fill(planetMantle);
p5.stroke(planetCrust);
p5.strokeWeight(5);
p5.rect(0, height - 15, width, height);

/* ground control */
p5.fill(ship);
p5.stroke(255);
p5.beginShape();
p5.vertex(width / 2 - 20, height);
p5.vertex(width / 2, height - 50);
p5.vertex(width / 2 + 20, height);
p5.endShape(p5.CLOSE);
}

  const drawLazer = () => {
    if (!focus)
        return;

      p5.stroke(p5.color(138,43,226));
      p5.strokeWeight(focus.completedText.length); // width of line depends on progress

      // point of ground control
      p5.line(width / 2, height - 50, focus.position.x, focus.position.y);

      p5.fill(255);
      p5.noStroke();
      p5.textAlign(p5.LEFT);
      p5.textSize(30);
      p5.text(focus.completedText, 10, height - 40);
  }

  const drawScore = () => {
    p5.textAlign(p5.RIGHT);
      p5.noStroke();
      p5.textSize(30);
      p5.fill(255);
      p5.text(score, 50, height / 2);
  }

const endGame = () => {
  p5.noLoop();

  	p5.fill(255);
    p5.noStroke();
    p5.textAlign(p5.CENTER);
    p5.textSize(80);
  	p5.text("Wasted!", width / 2, height / 2);
}


//ASTEROID


}

};

export default sketch;
