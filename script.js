"use strict";

const cpyBtn = document.querySelectorAll(".cpyBtn");

const goBtn = document.querySelector(".goBtn");



for(let i = 0;i<cpyBtn.length;i++){
    cpyBtn[i].addEventListener('click',function(){
        
        let copyText = document.querySelector(`.myText${i}`);
            
        copyText.select();
        copyText.setSelectionRange(0,99999);
        document.execCommand("copy");
    });

}


goBtn.addEventListener("click",function(){
let getNumber = document.querySelector(".go").value;
// let getNumber = Number(get);
document.getElementById("myAnchor").href = `#${getNumber - 1}`;
console.log(getNumber);

});



// const a = '42';
// let b = Number(a);
// console.log(b , a);
// let get = document.querySelector(".go").value;
// console.log(get);



