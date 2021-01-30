var r = random(0, 255);
var g = random(0, 255);
var b = random(0, 255);
var rf = random(0, 1);
var gf = random(0, 1);
var bf = random(0, 1);
var mode = 0;


setInterval(function() {

var s0 = Number(getElId('in1', 1));
var s1 = Number(getElId('in2', 1));
if (s0 <= 10) {
var n0 = Number(getElId('in0', 1));
} else {
var n0 = getElId('in0', 1).toLowerCase();
}
if (numSi(n0, s0, s1) != 'NaN') {
printElSet('out','Ответ: ' + String(numSi(n0, s0, s1)).toUpperCase()  + '\t' + ' в '  + s1 + '-ой');
} else {
printElSet('out', 'Ответ: ' + 0  + '\t' + ' в '  + s1 + '-ой');    
}
}, 10);

setInterval(function() {
var a = countNumSi(getElId('in4', 1), getElId('in5', 1), getElId('in6', 1), getElId('in7', 1), getElId('in8', 1), getElId('in9', 1));
    if (a != 'NaN') {
printElSet('out3', 'Ответ: '+ countNumSi(getElId('in4', 1), getElId('in5', 1), getElId('in6', 1), getElId('in7', 1), getElId('in8', 1), getElId('in9', 1)) + ' в ' + getElId('in9', 1) + '-ой');
    } else {
printElSet('out3', 'Ответ: 0');
    }

}, 10);

setInterval(function() {
if (countStr(getElId('in3', 1))) {
printElSet('out1','Ответ: ' + countStr(getElId('in3', 1)));
}
}, 10);


function cal0() {

changeStyl('setting', 'display', 'none');    
changeStyl('k1', 'display', 'none');
changeStyl('k0', 'display', 'contents');
changeStyl('k2', 'display', 'none');
changeStyl('k3', 'display', 'none');
    localStorage.cal = 1;

}
function cal1() {
 
    changeStyl('setting', 'display', 'none');        
    changeStyl('k0', 'display', 'none');
    changeStyl('k2', 'display', 'none');
    changeStyl('k3', 'display', 'none');
    changeStyl('k1', 'display', 'contents');
    localStorage.cal = 2;

}
function cal2() {

    changeStyl('setting', 'display', 'none');     
    changeStyl('k1', 'display', 'none');
    changeStyl('k0', 'display', 'none');
    changeStyl('k3', 'display', 'none');
    changeStyl('k2', 'display', 'contents');
    localStorage.cal = 3;

}
function cal3() {

    changeStyl('setting', 'display', 'none');     
    changeStyl('k1', 'display', 'none');
    changeStyl('k0', 'display', 'none');
    changeStyl('k2', 'display', 'none');
    changeStyl('k3', 'display', 'contents');
    localStorage.cal = 4


}

function setting() {
    changeStyl('setting', 'display', 'contents');     
    changeStyl('k1', 'display', 'none');
    changeStyl('k0', 'display', 'none');
    changeStyl('k2', 'display', 'none');
    changeStyl('k3', 'display', 'none');

}

function setMode() {
mode++;
if (mode > 5) {
mode = 0;
}

}

setInterval(function() {

var n0 = Number(getElId('in11', 1));
var n1 = Number(getElId('in12', 1));
var fix = Number(getElId('in13', 1));

if (mode == 0) {

    printElSet('modeS0', 'Сколько составляет');
    printElSet('modeS1', '% от числа');
    printElSet('modeS2', '');
    printElSet('out4', 'Ответ: ' + String(((n1 / 100) * n0).toFixed(fix)));

} else if (mode == 1) {

    printElSet('modeS0', 'Сколько % составляет число');
    printElSet('modeS1', 'от числа');
    printElSet('modeS2', '');
    printElSet('out4', 'Ответ: ' + String((100 / (n1 / n0)).toFixed(fix)));
    
} else if (mode == 2) {

    printElSet('modeS0', 'К числу');
    printElSet('modeS1', 'прибавить');
    printElSet('modeS2', '%');
    printElSet('out4', 'Ответ: ' + String((((n0 / 100) * n1) + n0).toFixed(fix)));
    
} else if (mode == 3) {

    printElSet('modeS0', 'От числа');
    printElSet('modeS1', 'отнять');
    printElSet('modeS2', '%');
    printElSet('out4', 'Ответ: ' + String(((n0 - (n0 / 100) * n1)).toFixed(fix)));
    
} else if (mode == 4) {

    printElSet('modeS0', 'Число');
    printElSet('modeS1', 'умножить на');
    printElSet('modeS2', '%');
    printElSet('out4', 'Ответ: ' + String((((n0 / 100) * n1) * n0).toFixed(fix)));
    
} else if (mode == 5) {

    printElSet('modeS0', 'Число');
    printElSet('modeS1', 'поделить на');
    printElSet('modeS2', '%');
    printElSet('out4', 'Ответ: ' + String((n0 / ((n0 / 100) * n1)).toFixed(fix)));
        
}


}, 10)

/*
setInterval(function() {
if (r >= 255 && rf) {
rf = false;
} else if (r <= 0 && !rf) {
rf = true;    
}
if (g >= 255 && gf){
gf = false;
} else if (g <= 0 && !gf) {
gf = true;
}
if (b >= 255 && bf){
bf = false;
} else if (b <= 0 && !bf) {
bf = true;
}

if (rf) {
r++;
} else {
r--;
}

if (gf) {
g++;
} else {
g--;
}

if (bf) {
b++;
} else {
b--;
}
changeStyl('spr', 'color', 'rgb('+r+','+g+','+b+')');
}, 20);

*/