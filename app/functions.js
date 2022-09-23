function countCal0(inputData) {
    //document.getElementById('out0').innerText = Number(inputData.in0.value) + Number(inputData.in1.value);

    if (!calcFalag) {
        let num = (inputData.in0.value);
        let systemIn = Number(inputData.in1.value);
        let systemOut = Number(inputData.in2.value);

        printElSet('cal0-out0', returnElseNotNotf(numSi(num, systemIn, systemOut)));

    } else {

        let num00 = (inputData.in3.value);
        let num0systemIn = Number(inputData.in4.value);
        let typeSign = (inputData.in5.value);
        let num11 = (inputData.in6.value);
        let num1systemIn = Number(inputData.in7.value);
        let systemOut = Number(inputData.in8.value);

        printElSet('cal0-out1', returnElseNotNotf(countNumSi(num00, num0systemIn, typeSign, num11, num1systemIn, systemOut)));

    }

}

let calcFalag = false;
function switchModefc0() {
    calcFalag = !calcFalag;
    if (calcFalag) {
        document.getElementById('cal-trans-si').style.display = 'none';
        document.getElementById('cal-cal-si').style.display = 'contents';
    } else {
        document.getElementById('cal-trans-si').style.display = 'contents';
        document.getElementById('cal-cal-si').style.display = 'none';
    }

}




function countCal1(inputData) {


    let typeMode = Number(inputData.in0.value);
    let num0 = Number(inputData.in1.value);
    let num1 = Number(inputData.in2.value);
    let fix = Number(inputData.in3.value);



    if (typeMode == 0) {
        printElSet('cal1-out0', 'Сколько составляет');
        printElSet('cal1-out1', '% от числа');
        printElSet('cal1-out2', '');
        printElSet('cal1-out3', 'Ответ: ' + String(((num1 / 100) * num0).toFixed(fix)));
    } else if (typeMode == 1) {
        printElSet('cal1-out0', 'Сколько % составляет число');
        printElSet('cal1-out1', 'от числа');
        printElSet('cal1-out2', '');
        printElSet('cal1-out3', 'Ответ: ' + String((100 / (num1 / num0)).toFixed(fix)));
    } else if (typeMode == 2) {
        printElSet('cal1-out0', 'К числу');
        printElSet('cal1-out1', 'прибавить');
        printElSet('cal1-out2', '%');
        printElSet('cal1-out3', 'Ответ: ' + String((((num0 / 100) * num1) + num0).toFixed(fix)));
    } else if (typeMode == 3) {
        printElSet('cal1-out0', 'От числа');
        printElSet('cal1-out1', 'отнять');
        printElSet('cal1-out2', '%');
        printElSet('cal1-out3', 'Ответ: ' + String(((num0 - (num0 / 100) * num1)).toFixed(fix)));
    } else if (typeMode == 4) {
        printElSet('cal1-out0', 'Число');
        printElSet('cal1-out1', 'умножить на');
        printElSet('cal1-out2', '%');
        printElSet('cal1-out3', 'Ответ: ' + String((((num0 / 100) * num1) * num0).toFixed(fix)));
    } else if (typeMode == 5) {
        printElSet('cal1-out0', 'Число');
        printElSet('cal1-out1', 'поделить на');
        printElSet('cal1-out2', '%');
        printElSet('cal1-out3', 'Ответ: ' + String((num0 / ((num0 / 100) * num1)).toFixed(fix)));
    }

}



function countCal2(inputData) {

    let USt = inputData.in0.value;
    let ISt = inputData.in1.value;
    let PSt = inputData.in2.value;
    let RSt = inputData.in3.value;

    let U = Number(inputData.in0.value);
    let I = Number(inputData.in1.value);
    let P = Number(inputData.in2.value);
    let R = Number(inputData.in3.value);

    printElSet('cal2-out0', '');
    printElSet('cal2-out1', '');
    printElSet('cal2-out2', '');
    printElSet('cal2-out3', '');


    if (USt != "" && ISt != "") {

        if (!Number.isInteger(U / I)) {
            printElSet('cal2-out3', 'Сопротивление: ' + (U / I).toFixed(2) + ' Ом');
        } else {
            printElSet('cal2-out3', 'Сопротивление: ' + (U / I) + ' Ом');
        }


        if (!Number.isInteger(U * I)) {
            printElSet('cal2-out2', 'Мощность: ' + (U * I).toFixed(2) + ' W');
        } else {
            printElSet('cal2-out2', 'Мощность: ' + (U * I) + ' W');
        }

    }

    if (PSt != "" && RSt != "") {

        if (!Number.isInteger(Math.sqrt(P / R))) {
            printElSet('cal2-out1', 'Ток: ' + (Math.sqrt(P / R)).toFixed(2) + ' А');
        } else {
            printElSet('cal2-out1', 'Ток: ' + (Math.sqrt(P / R)) + ' А');
        }

        if (!Number.isInteger(Math.sqrt(P * R))) {
            printElSet('cal2-out0', 'Напряжение: ' + (Math.sqrt(P * R)).toFixed(2) + ' V');
        } else {
            printElSet('cal2-out0', 'Напряжение: ' + (Math.sqrt(P * R)) + ' V');
        }

    }

    if (USt != "" && RSt != "") {

        if (!Number.isInteger(U / R)) {
            printElSet('cal2-out1', 'Ток: ' + (U / R).toFixed(2) + ' А');
        } else {
            printElSet('cal2-out1', 'Ток: ' + (U / R) + ' А');
        }

        if (!Number.isInteger((U * U) / R)) {
            printElSet('cal2-out2', 'Мощность: ' + ((U * U) / R).toFixed(2) + ' W');
        } else {
            printElSet('cal2-out2', 'Мощность: ' + ((U * U) / R) + ' W');
        }

    }

    if (ISt != "" && PSt != "") {

        if (!Number.isInteger(P / I)) {
            printElSet('cal2-out0', 'Напряжение: ' + (P / I).toFixed(2) + ' V');
        } else {
            printElSet('cal2-out0', 'Напряжение: ' + (P / I) + ' V');
        }

        if (!Number.isInteger(P / (I * I))) {
            printElSet('cal2-out3', 'Сопротивление: ' + (P / (I * I)).toFixed(2) + ' Ом');
        } else {
            printElSet('cal2-out3', 'Сопротивление: ' + (P / (I * I)) + ' Ом');
        }

    }

    if (USt != "" && PSt != "") {

        if (!Number.isInteger(P / U)) {
            printElSet('cal2-out1', 'Ток: ' + (P / U).toFixed(2) + ' А');
        } else {
            printElSet('cal2-out1', 'Ток: ' + (P / U) + ' А');
        }

        if (!Number.isInteger((U * U) / P)) {
            printElSet('cal2-out3', 'Сопротивление: ' + ((U * U) / P).toFixed(2) + ' Ом');
        } else {
            printElSet('cal2-out3', 'Сопротивление: ' + ((U * U) / P) + ' Ом');
        }

    }

    if (ISt != "" && RSt != "") {

        if (!Number.isInteger((I * I) * R)) {
            printElSet('cal2-out2', 'Мощность: ' + ((I * I) * R).toFixed(2) + ' W');
        } else {
            printElSet('cal2-out2', 'Мощность: ' + ((I * I) * R) + ' W');
        }

        if (!Number.isInteger(I * R)) {
            printElSet('cal2-out0', 'Напряжение: ' + (I * R).toFixed(2) + ' V');
        } else {
            printElSet('cal2-out0', 'Напряжение: ' + (I * R) + ' V');
        }

    }
    document.getElementById('cal2-in0-cal').disabled = false;
    document.getElementById('cal2-in1-cal').disabled = false;
    document.getElementById('cal2-in2-cal').disabled = false;
    document.getElementById('cal2-in3-cal').disabled = false;

    if (USt != "" && ISt != "") {

        document.getElementById('cal2-in2-cal').disabled = true;
        document.getElementById('cal2-in3-cal').disabled = true;

    } else if (PSt != "" && RSt != "") {

        document.getElementById('cal2-in0-cal').disabled = true;
        document.getElementById('cal2-in1-cal').disabled = true;


    } else if (PSt != "" && USt != "") {

        document.getElementById('cal2-in1-cal').disabled = true;
        document.getElementById('cal2-in3-cal').disabled = true;

    } else if (ISt != "" && RSt != "") {

        document.getElementById('cal2-in0-cal').disabled = true;
        document.getElementById('cal2-in2-cal').disabled = true;

    } else if (USt != "" && RSt != "") {

        document.getElementById('cal2-in1-cal').disabled = true;
        document.getElementById('cal2-in2-cal').disabled = true;

    } else if (ISt != "" && PSt != "") {

        document.getElementById('cal2-in0-cal').disabled = true;
        document.getElementById('cal2-in3-cal').disabled = true;

    }

}





let newIdInCalR = 0;

function addNewInputCal3() {

    if (newIdInCalR > 9) {
        alert('А нахера тебе больше 10 резистров?');

    } else {

        let div = document.createElement('div');
        //let newElIn = '<p class="title-text">R'+ (newIdInCalR+1) +':</p> <input type="number" placeholder="Om" class="input-text" id="cal3-in'+ newIdInCalR +'-cal">';

        div.innerHTML = '<p class="title-text">R' + (newIdInCalR + 1) + ':</p> <input type="number" placeholder="Om" class="input-text" id="cal3-in' + newIdInCalR + '-cal">';

        document.getElementById("input-r-data").appendChild(div);
        newIdInCalR++;

    }


}

// function to create two input fields, located on the start page

let lstOutputDataCal3 = 0;

function countCal3(inputData) {

    let R_All = 0;
    for (let i = 0; i < newIdInCalR; i++) {
        let inDataOmUs = Number(document.getElementById('cal3-in' + i + '-cal').value);
        if (inDataOmUs == 0) {
            continue;
        }
        R_All += 1 / inDataOmUs;

    }
    R_All = 1 / R_All;

    if (lstOutputDataCal3 != R_All && Number.isFinite(R_All)) {
        document.getElementById('cal3-out0').innerText = 'Ответ: ' + (R_All).toFixed(2) + ' Om';
        lstOutputDataCal3 = R_All;

    }

}


function countCal4(inputData) {

    let inStr = inputData.in0.value;
    if (inStr == '') { return; }
    if (inStr == 'openDebagWindow') {
        document.getElementById('cal4-in0-cal').value = '';
        exeNowCalc = 6;
        return;
    }
    inStr = inStr.replace(/ /gi, '');
    inStr = inStr.replace(/√/gi, 'Math.sqrt');
    let availabilityDegree = inStr.indexOf('^');
    let i = availabilityDegree - 1;
    let numOfDegree = '';
    let degree = '';



    if (availabilityDegree > -1) {

        while (!isNaN(Number(inStr[i])) && i >= 0) {
            numOfDegree += inStr[i];
            i--;
        }

        numOfDegree = reverseString(numOfDegree);
        i = availabilityDegree + 2;

        while (inStr[i] != ')') {
            degree += inStr[i];
            i++;
            if (i > inStr.length) {
                return;
            }
        }

        //print('Deg: ' + degree + '  Number: ' + numOfDegree);
        inStr = inStr.replace(numOfDegree + '^(' + degree + ')', 'Math.pow(' + numOfDegree + ',' + degree + ')');



    }

    inStr = String(inStr);
    let outStr = eval(inStr);
    console.log(outStr);
    if (isNaN(outStr) || outStr == undefined || outStr == null) {
        return;
    }
    //print(eval(inStr));
    printElSet('cal4-out0', 'Ответ: ' + eval(inStr));

}


let lstOutputDataCal5 = '';

function countCal5(inputData) {

    let allInputNumber = [];

    for (let i = 0; i < newIdInCal5; i++) {
        let inDataNumbers = Number(document.getElementById('cal5-in' + i + '-cal').value);
        if (inDataNumbers == 0) {
            continue;
        }

        allInputNumber.push(inDataNumbers);


    }

    //console.log(allInputNumber);
    let reznok = NOK(allInputNumber);
    let reznod = NOD(allInputNumber);
    let outDataCalc5 = 'НОД: ' + isDirt(reznod) + '\nНОК: ' + isDirt(reznok);
    if (outDataCalc5 != lstOutputDataCal5) {
        document.getElementById('cal5-out0').innerText = outDataCalc5;
        lstOutputDataCal5 = outDataCalc5;

    }



}

let newIdInCal5 = 0;

function addNewInputCal5() {
    if (newIdInCal5 > 9) {
        alert('А нахера тебе больше 10 чисел?');

    } else {

        let div = document.createElement('div');

        div.innerHTML = '<p class="title-text">№' + (newIdInCal5 + 1) + ':</p> <input type="number" class="input-text" id="cal5-in' + newIdInCal5 + '-cal">';

        document.getElementById("input-n-data").appendChild(div);
        newIdInCal5++;

    }

}

let dataDBInput = '';
function dbFunc(inputData) {
    dataDBInput = inputData.in0.value;

}

function powdbf() {
    eval(dataDBInput);

}