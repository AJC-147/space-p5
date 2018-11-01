const sketch = (width, height, props) => {
  return function (p5) {
    let value = props.value;
  let rotation = 0;

  p5.setup = () => {

  };

  p5.draw = () => {
    if (p5.mouseIsPressed) {
      p5.fill(0);
    } else {
      p5.fill(255);
    }
    p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);

  }
}

};

export default sketch;
