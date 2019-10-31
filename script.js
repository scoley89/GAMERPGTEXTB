const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

function startGame() {
  // state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes().find(textNode => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

function hello(e) {
  e.preventDefault();
  let value = document.getElementById("something");
  // state.name = e.target.value;
  state.name = value.value;
  console.log(state.name);
  const allButtons = document.querySelectorAll(".btn");
  allButtons.forEach(el => {
    el.setAttribute("style", "visibility: visible");
  });
  textElement.setAttribute("style", "visibility: visible");
  startGame();
}

function beforeEverything() {
  const allButtons = document.querySelectorAll(".btn");
  allButtons.forEach(el => {
    el.setAttribute("style", "visibility: hidden");
  });

  textElement.setAttribute("style", "visibility: hidden");
  optionButtonsElement.innerHTML = `<div class="IntroScreen">
  <h1>Love and Loss</h1>
  <h2>War Time edition &copy;</h2>
  <h5>Designed by: Stephen Coley</h5>
  <form onSubmit="hello(event)">
  <label>"Hello Citizen" says a uniformed man with a message in his hand. "We require your full name here, to insure that there is proper documentation denoting that you have recieved this summons"</label>
  <input type="text" id="something" value="" >
  <button class ="introButton" type="submit">Finish</button>
  </form></div`;
}

beforeEverything();
// startGame();
