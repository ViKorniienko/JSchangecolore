const btn = document.body.children[0]

btn.onmouseover = changeBtnColor
btn.onclick = changeBodyColor

// задаємо кнопці різний колір

function rnd() {
  let num = Math.random() * 256
  return Math.floor(num)
}

function genRGB() {
  return "rgb(" + rnd() + "," + rnd() + "," + rnd() + ")"
  // return `rgb(${rnd()},${rnd()},${rnd()})`
}

// при наведенні мишкою кнопка змінює колір

function changeBtnColor() {
  btn.style = "background: " + genRGB()
}

// при натисканні на кнопку фон змінює колір

function changeBodyColor() {
  document.body.style.background = btn.style.background
}
