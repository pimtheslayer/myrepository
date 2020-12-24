'use strict';

document.addEventListener('DOMContentLoaded', ()=> {

const  getIn = document.getElementById('inEncrypt'), // тут наша херь
       getHelp = document.getElementById('help'),
       getOut = document.getElementById('outEncrypt'),
       userInsert = document.getElementById('userInsert'),
       getValue = document.getElementById('getValue'),
       getInUnecnrypt = document.getElementById('inUnencrypt'),
       getOutUnencrypt = document.getElementById('outUnencrypt');

let offset = 0; //сдвиг шифрования


//достаем значение юзера с формы

userInsert.addEventListener('submit', (e)=>{ //это обработчик событий, он принимает на себя событие на которое реагирует и ивент

    e.preventDefault(); //Тут мы прерывем дефолтное поведение события кнопки (перезагрузка страницы)

    offset = parseInt(getValue.value);

    
    console.log(offset);

});






getIn.addEventListener('input', ()=>{ //реагируем обработчиком события на ввод пользователя
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


    //Дешифруем

    getInUnecnrypt.addEventListener('input',()=>{

        let str = getInUnecnrypt.value;
        let out = '';
        for(let i = 0; i<str.length;i++){
            let code = str.charCodeAt(i);
            code = code-offset;
            out+= String.fromCharCode(code);
        }

        getOutUnencrypt.innerHTML = out; //впихнули в блок

    });

 });








});