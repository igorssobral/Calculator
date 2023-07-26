const buttons = document.querySelectorAll('[celula-bottom]');
const previous = document.getElementsByClassName('[cell-result]');
const current = document.querySelectorAll('[cell-result]');


constructor()

buttons.forEach((btn)=> {
    btn.addEventListener('click', (e)=>{
        const value = e.target.innerText;
       

        if(+value >= 0 || value === "," ){
             console.log(value);
        }else{
            console.log("Op " + value);
        }
    })
    
})