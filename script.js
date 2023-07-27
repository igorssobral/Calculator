const buttons = document.querySelectorAll("[celula-bottom]");
const current = document.querySelector("[cell-current]");

class calculator {
  constructor(previous, current) {
    this.previous = previous;
    this.current = current;
    this.currentOperation = "";
  }

  addDigit(value) {
    if (value === "," && this.current.innerText.includes(",")) {
      return;
    }
    if (
      this.current.textContent.length == 3 ||
      this.current.textContent.length == 7
    ) {
      this.current.innerText += ".";
    }

    this.currentOperation = value;
    this.updateScreen();
  }

  operations(operation) {
    
    const previous = this.current.innerText;
    console.log("🚀 ~ file: script.js:30 ~ calculator ~ operations ~ previous:", previous)

    let current = this.current.innerText;
    
    let result = null;

    

  
    switch (operation) {
      case "+":
        result = previous + current;
        break;

      case "-":
        result = previous - current;
        break;

      case "x":
        result = previous * current;
        break;

      case "%":
        result = previous / current;
        break;

  }
 
  }

  updateScreen(result = null) {
    this.current.innerText += this.currentOperation;

    if(!result == null) {
        this.current.innerText = result;
    }
  }
}

const calc = new calculator(previous, current);

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
