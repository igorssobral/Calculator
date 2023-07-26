const buttons = document.querySelectorAll('[celula-bottom]');
const previous = document.querySelector('[cell-previous');
const current = document.getElementsByClassName('current-operation');

class calculator{

    constructor(previous, current){
        this.previous = previous;
        this.current = current;
        this.currentOperation = '';

    }

addDigit(value){
    this.currentOperation = value;
    this.updateScreen();
}


}

const calc = new calculator(previous, current);

buttons.forEach((btn)=> {
    btn.addEventListener('click', (e)=>{
        const value = e.target.innerText;

        if(+value >= 0 || value === "," ){
           calc.addDigit(value);
        }else{
            console.log("Op " + value);
        }
    })
    
})