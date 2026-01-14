let count = 0;
const display = document.getElementById("count");

function update(value) {
  count = value === 0 ? 0 : count + value;
  display.textContent = count;
}
