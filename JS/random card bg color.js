function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  document.addEventListener("mouseover", function(){
    document.body.style.backgroundColor = randomColor();
  });
  
  document.querySelector('circle').addEventListener('mouseover', event => {
        event.target.style.fill = randomColor();
  });