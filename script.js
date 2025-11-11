// Pega os elementos
const bulb = document.getElementById("bulbGlass");
const statusValue = document.getElementById("statusValue");
const historyList = document.getElementById("historyList");
const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");
const btnClear = document.getElementById("btnClear");

let isOn = false;

// Atualiza a interface
function updateUI() {
  if (isOn) {
    bulb.setAttribute("fill", "#FFD93B");
    statusValue.textContent = "Lâmpada ligada";
    statusValue.className = "value-on";
  } else {
    bulb.setAttribute("fill", "#E0E6E9");
    statusValue.textContent = "Lâmpada desligada";
    statusValue.className = "value-off";
  }
}

// Adiciona item no histórico
function addHistory(action) {
  const li = document.createElement("li");
  const time = new Date().toLocaleTimeString();
  li.textContent = `${time} - ${action}`;
  historyList.prepend(li);
}

// Botões
btnOn.addEventListener("click", () => {
  if (!isOn) {
    isOn = true;
    updateUI();
    addHistory("Lâmpada ligada");
  }
});

btnOff.addEventListener("click", () => {
  if (isOn) {
    isOn = false;
    updateUI();
    addHistory("Lâmpada desligada");
  }
});

btnClear.addEventListener("click", () => {
  historyList.innerHTML = "";
  addHistory("Histórico limpo");
});

// Inicializa
updateUI();
addHistory("Sistema iniciado");
