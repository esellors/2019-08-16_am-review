document.getElementById('shake').addEventListener('click', () => {
  shakeIt();
})

const fortunes = ['Yes', 'No', 'Huh?', 'Ha!'];

function fortunePicker() {
  return fortunes[Math.floor(Math.floor(Math.random() * fortunes.length))]
}

function shakeIt() {
  const screen = document.getElementById('screen')
  const h1Element = document.createElement('h1');
  const fortuneText = document.createTextNode(fortunePicker());

  h1Element.appendChild(fortuneText)
  
  h1Element.setAttribute('id', 'fortune') // to remove
  const fortune = document.getElementById('fortune');
  if (fortune) {
    screen.removeChild(fortune)
  }

  screen.appendChild(h1Element);
}