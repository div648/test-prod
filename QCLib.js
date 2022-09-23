function getElId(id, flag = '') {
    var d;
    if (flag == 'text' || flag == '') {
        d = document.getElementById(id).value;
    } else if (flag == 'box') {
        d = document.getElementById(id).checked;
    }
    return d;
}

function printElSet(id, text, setting = '') {
    if (setting == '' || setting == 'text') {
        document.getElementById(id).innerText = text;
    } else if (setting == 'href') {
        document.getElementById(id).href = text;
    } else if (setting == 'select') {
        if (isNaN(Number(text))) { return; }
        document.getElementById(id).selectedIndex = Number(text);
    }
}


function changeStyl(id, stil, con) {

    var d = document.getElementById(id);
    if (stil == "display") {
        d.style.display = con;
    } else if (stil == "color") {
        d.style.color = con;
    } else if (stil == "size") {
        d.style.fontSize = con;
    } else if (stil == "bord") {
        d.style.border = con;
    } else if (stil == "bordR") {
        d.style.borderRadius = con;
    } else if (stil == "txtA") {
        d.style.textAlign = con;
    } else if (stil == "margin") {
        d.style.margin = con;
    } else if (stil == "backColor") {
        d.style.backgroundColor = con;
    } else if (stil == "x") {
        d.style.width = con;
    } else if (stil == "y") {
        d.style.height = con;
    }
}



function insertAtCaret(areaId, text) {
    var txtarea = document.getElementById(areaId);
    if (!txtarea) { return; }

    var scrollPos = txtarea.scrollTop;
    var strPos = 0;
    var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
        "ff" : (document.selection ? "ie" : false));
    if (br == "ie") {
        txtarea.focus();
        var range = document.selection.createRange();
        range.moveStart('character', -txtarea.value.length);
        strPos = range.text.length;
    } else if (br == "ff") {
        strPos = txtarea.selectionStart;
    }

    var front = (txtarea.value).substring(0, strPos);
    var back = (txtarea.value).substring(strPos, txtarea.value.length);
    txtarea.value = front + text + back;
    strPos = strPos + text.length;
    if (br == "ie") {
        txtarea.focus();
        var ieRange = document.selection.createRange();
        ieRange.moveStart('character', -txtarea.value.length);
        ieRange.moveStart('character', strPos);
        ieRange.moveEnd('character', 0);
        ieRange.select();
    } else if (br == "ff") {
        txtarea.selectionStart = strPos;
        txtarea.selectionEnd = strPos;
        txtarea.focus();
    }

    txtarea.scrollTop = scrollPos;
}


function print(data) {
    console.log(data);

}

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


function returnElseNotNotf(variable) {
    if (!isNaN(variable) && variable != undefined && variable != null) {
        return variable;
    } else {
        return '';
    }
}



let sysInCal0 = 2;
let usageStatistics = {

    s2: 0,
    s4: 0,
    s6: 0,
    s8: 0,
    s10: 0,
    s12: 0,
    s14: 0,
    s16: 0

};


if (localStorage.sys2 == undefined) {
    synData();
} else {
    synClone();
}

function settingAutoSelection(sysInCal0New) {
    sysInCal0New = Number(sysInCal0New);
    if (sysInCal0New != sysInCal0 && !ditots) {
        autoOn = false;
        eval('usageStatistics.s' + sysInCal0New + ' += 1');
        synData();
        sysInCal0 = sysInCal0New;
    } else if (sysInCal0New != sysInCal0 && ditots) {
        //autoOn = false;
        ditots = false;

    }


}



function synData() {
    for (let i = 1; i <= 8; i++) {
        eval('localStorage.sys' + (i * 2) + ' = usageStatistics.s' + (i * 2));
    }
}

function synClone() {
    for (let i = 1; i <= 8; i++) {
        eval('usageStatistics.s' + (i * 2) + ' = Number(localStorage.sys' + (i * 2) + ')');
    }
}


let strIn = 0;
let ditots = false; // Did I turn on the system
let autoOn = true;



function selectionTextForAutoSelection(strInNew) {

    let maxChar = 0;
    strInNew = String(strInNew);
    let nowChar = 0;

    if (strInNew != strIn) {
        if (strInNew == '') {
            autoOn = true;
        }
        for (let i = 0; i < strInNew.length; i++) {
            nowChar = Number(strInNew[i]);
            //console.log(nowChar + '   ' + maxChar);
            if (!isNaN(nowChar)) {


                if (maxChar < nowChar) {
                    maxChar = nowChar;
                }


            } else {

                nowChar = strInNew[i];
                nowChar = nowChar.toUpperCase();
                if (nowChar == 'A') { nowChar = 10; if (maxChar < nowChar) { maxChar = nowChar; } }
                if (nowChar == 'B') { nowChar = 11; if (maxChar < nowChar) { maxChar = nowChar; } }
                if (nowChar == 'C') { nowChar = 12; if (maxChar < nowChar) { maxChar = nowChar; } }
                if (nowChar == 'D') { nowChar = 13; if (maxChar < nowChar) { maxChar = nowChar; } }
                if (nowChar == 'E') { nowChar = 14; if (maxChar < nowChar) { maxChar = nowChar; } }
                if (nowChar == 'F') { nowChar = 15; if (maxChar < nowChar) { maxChar = nowChar; } }
                /*
                (не правильно)
                nowChar == 'A' ? maxChar = 10 : pass();
                nowChar == 'B' ? maxChar = 11 : pass();
                nowChar == 'C' ? maxChar = 12 : pass();
                nowChar == 'D' ? maxChar = 13 : pass();
                nowChar == 'E' ? maxChar = 14 : pass();
                nowChar == 'F' ? maxChar = 15 : pass();
                */
            }

        }
        if (maxChar % 2 == 0) {
            maxChar += 2;
        } else {
            maxChar++;
        }

        //console.log(maxChar);
        let sysOutAutoGenerate = isMax(eval('usageStatistics.s' + maxChar), eval('usageStatistics.s' + (maxChar + 2)), maxChar, maxChar + 2);
        //console.log(sysOutAutoGenerate);
        //sysOutAutoGenerate = (sysOutAutoGenerate / 2) - 1;
        if (autoOn) {
            printElSet('cal0-in1-trans', sysOutAutoGenerate, 'select');
            ditots = true;


        }
        strIn = strInNew;
    }

}



function isMax(number0, number1,
    ifout0 = undefined, ifout1 = undefined) {
    number0 = Number(number0);
    number1 = Number(number1);
    if (number0 >= number1) {
        if (ifout0 == undefined) {
            return number0;
        } else {
            return ifout0;
        }
    } else {
        if (ifout1 == undefined) {
            return number1;
        } else {
            return ifout1;
        }
    }
}

function pass() { }

function comparisonArr(arr0, arr1) {
    for (let i = 0; i < arr0.length; i++) {
        if (arr0[i] != arr1[i]) {
            return false;
        }
        
    }
    return true;

}