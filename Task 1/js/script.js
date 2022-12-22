let div = document.createElement('div');
div.setAttribute('class', 'container');

let div1 = document.createElement('div');
div1.setAttribute('class', 'calculator');


let input =document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'output-screen');
div1.appendChild(input);

let button_clear = document.createElement('button');
button_clear.setAttribute('onclick', 'Clear()');
button_clear.setAttribute('id', 'clr');
button_clear.innerText = 'C';
div1.appendChild(button_clear);

let button_del = document.createElement('button');
button_del.setAttribute('onclick', "del()");
button_del.setAttribute('id', 'del');
button_del.innerText = 'Del';
div1.appendChild(button_del);

let button_mod = document.createElement('button');
button_mod.setAttribute('onclick', "display('%')");
button_mod.setAttribute('class', 'sign');
button_mod.innerText = '%';
div1.appendChild(button_mod);

let button_multi = document.createElement('button');
button_multi.setAttribute('onclick', "display('*')");
button_multi.setAttribute('class', 'sign');
button_multi.innerText = '*';
div1.appendChild(button_multi);

let button_7 = document.createElement('button');
button_7.setAttribute('onclick', "display('7')");
button_7.innerText = '7';
div1.appendChild(button_7);

let button_8 = document.createElement('button');
button_8.setAttribute('onclick', "display('8')");
button_8.innerText = '8';
div1.appendChild(button_8);

let button_9 = document.createElement('button');
button_9.setAttribute('onclick', "display('9')");
button_9.innerText = '9';
div1.appendChild(button_9);

let button_dev = document.createElement('button');
button_dev.setAttribute('onclick', "display('/')");
button_dev.setAttribute('class', 'sign');
button_dev.innerText = '/';
div1.appendChild(button_dev);

let button_4 = document.createElement('button');
button_4.setAttribute('onclick', "display('4')");
button_4.innerText = '4';
div1.appendChild(button_4);

let button_5 = document.createElement('button');
button_5.setAttribute('onclick', "display('5')");
button_5.innerText = '5';
div1.appendChild(button_5);

let button_6 = document.createElement('button');
button_6.setAttribute('onclick', "display('6')");
button_6.innerText = '6';
div1.appendChild(button_6);

let button_sub = document.createElement('button');
button_sub.setAttribute('onclick', "display('-')");
button_sub.setAttribute('class', 'sign');
button_sub.innerText = '-';
div1.appendChild(button_sub);

let button_1 = document.createElement('button');
button_1.setAttribute('onclick', "display('1')");
button_1.innerText = '1';
div1.appendChild(button_1);

let button_2 = document.createElement('button');
button_2.setAttribute('onclick', "display('2')");
button_2.innerText = '2';
div1.appendChild(button_2);

let button_3 = document.createElement('button');
button_3.setAttribute('onclick', "display('3')");
button_3.innerText = '3';
div1.appendChild(button_3);

let button_add = document.createElement('button');
button_add.setAttribute('onclick', "display('+')");
button_add.setAttribute('class', 'sign');
button_add.innerText = '+';
div1.appendChild(button_add);

let button_0 = document.createElement('button');
button_0.setAttribute('onclick', "display('0')");
button_0.innerText = '0';
div1.appendChild(button_0);

let button_00 = document.createElement('button');
button_00.setAttribute('onclick', "display('00')");
button_00.innerText = '00';
div1.appendChild(button_00);

let button_dot = document.createElement('button');
button_dot.setAttribute('onclick', "display('.')");
button_dot.innerText = '.';
div1.appendChild(button_dot);

let button_calc = document.createElement('button');
button_calc.setAttribute('onclick', "calculate()");
button_calc.setAttribute('id', 'equal');
button_calc.innerText = '=';
div1.appendChild(button_calc);

div.appendChild(div1)
document.body.append(div);

let result = document.getElementById('output-screen');

function display(num){
    result.value += num;
}

function calculate(){
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert('invalid');
    }
}

function del(){
    result.value = result.value.slice(0, -1);
}

function Clear(){
    result.value = "";
}

document.getElementById("output-screen").onkeypress = function typing(event){
    let show = document.getElementById("output-screen")
    if(event.key === "Enter"){
        (show.value === " ") ? alert("Please enter the value first") : calculate();
    }
    else if (!(event.charCode >= 48 && event.charCode <= 57 || event.key === "+"  || event.key === "-" || event.key === "/" || event.key === "8")){
        alert("Please enter number only");
        event.preventDefault();
    }
}

