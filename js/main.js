
'use strict'

        window.addEventListener('DOMContentLoaded', ()=>{
        document.querySelector('#add').addEventListener('click',()=>{
        const FizzNum = parseInt(document.querySelector('[name=fizz]').value);
        const BuzzNum = parseInt(document.querySelector('[name=buzz]').value);
        var targetNode=document.querySelector('#target');
        var n;
        while(n=targetNode.firstChild){
          n.parentNode.removeChild(n);
        }
        if (isNaN(FizzNum) ||isNaN(BuzzNum)){
            n=Object.assign(document.createElement('li'),{textContent:"整数値を入れてください"});
            targetNode.appendChild(n);
        }else{
        for (let index = 1; index <= 99; index++) {
            n=document.createElement('li');
        if(index % FizzNum === 0 && index % BuzzNum === 0) {
            n.textContent=`FizzBuzz ${index}`;
        }else if(index % FizzNum === 0) {
            n.textContent=`Fizz ${index}`;
        }else if(index % BuzzNum === 0){
            n.textContent=`Buzz ${index}`;
        }else{
            continue;
       }
        targetNode.appendChild(n);

    }
  }
});
});
