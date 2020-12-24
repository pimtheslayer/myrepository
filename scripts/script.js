'use strict';

document.addEventListener('DOMContentLoaded', ()=> {

const  getIn = document.getElementById('inEncrypt'), // тут наша херь
       getHelp = document.getElementById('help'),
       getOut = document.getElementById('outEncrypt'),
       userInsert = document.getElementById('userInsert'),
       getValue = document.getElementById('getValue'); // тут шифр

let offset = 0;


userInsert.addEventListener('submit', (e)=>{

    e.preventDefault();

    offset = parseInt(getValue.value);

    
    console.log(offset);

});






getIn.addEventListener('input', ()=>{
    //шифруем
    //из кода в символ
    let str = getIn.value;
    
    //из символа в код
    console.log(str.charCodeAt(0));
    console.log(str);

    let out = '';
    for(let i = 0; i<str.length;i++){
        let code = str.charCodeAt(i);
        code = code+offset; //сдвигаем
        out+= String.fromCharCode(code);
    }

    //получаем результат
    getOut.innerHTML = out;


 });








});