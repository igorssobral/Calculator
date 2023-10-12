const buttons = document.querySelectorAll("[celula-bottom]");
const current = document.querySelector("[cell-current]");
let previous = "";
let result = null;
let signal = "";
let op = "";

class calculator {
  constructor(current) {
    this.current = current;
    this.currentOperation = "";
  }

  addDigit(value) {
    if (result != null) {
      this.current.innerText = "";
      result = null;
    }

    if (value === "," && this.current.innerText.includes(",")) {
      return;
    }
    if (!this.current.innerText.includes(",")) {
      if (
        this.current.textContent.length == 3 ||
        this.current.textContent.length == 7
      ) {
        this.current.innerText += ".";
      }
    }
    this.currentOperation = value;
    if (value === ",") {
      previous += ".";
    }
    previous += this.currentOperation;

    this.updateScreen();
  }

  operations(operation) {
    console.log(result);

    if (operation === "C") {
      previous = "";
      signal = "";
      result = null;
      op = "";
      this.current.innerText = "";
      this.currentOperation = "";
    }

    if (result !== null && operation === "=") {
      // se o usuario apertar o sinal de = depois de um calculo ele calcula o resultado com o valor apois o sinal do cálculo anterior!
      previous = result;
      previous += signal;
      previous += op[1];
    }
    if (operation !== "=") {
      if (result !== null) {
        //caso o usuario deseje calcular o resultado com outros valores
        previous = result;
        result = null;
      }

      if (operation !== "C") {
        previous += operation;
      }

      this.current.innerText = "";
      this.currentOperation = "";
    } else {
      //Quebra a String pra guardar os valores e o sinal da operação

      if (previous.includes("+")) {
        op = previous.split("+");
        signal = "+";
      } else if (previous.includes("-")) {
        op = previous.split("-");
        signal = "-";
      } else if (previous.includes("÷")) {
        op = previous.split("÷");
        signal = "÷";
      } else {
        op = previous.split("x");
        signal = "x";
      }
    }

    switch (
      signal // pega a String e converte para numero
    ) {
      case "+":
        result = Number(op[0]) + Number(op[1]);
        break;

      case "-":
        result = Number(op[0]) - Number(op[1]);
        break;

      case "x":
        result = Number(op[0]) * Number(op[1]);
        break;

      case "÷":
        result = Number(op[0]) / Number(op[1]);
        break;
    }

    this.current.innerText = "";
    this.currentOperation = "";
    this.updateScreen(result);
  }

  updateScreen(result = null) {
    this.current.innerText += this.currentOperation;

    if (result !== null) {
      this.current.innerText = result;
    }
  }
}

const calc = new calculator(current);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ",") {
      calc.addDigit(value);
    } else {
      calc.operations(value);
    }
  });
});
