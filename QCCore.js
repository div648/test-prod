let calcModules = [];
let nowInputData = [];
let lastInputData = [];
let exeNowCalc = -1; //-1
let exeNowCalcLast = NaN;
let start_scripts = false;

setInterval(() => {
    if (start_scripts) {
        if (exeNowCalc != -1) {
            let dataInCalcDrop = {};
            nowInputData = [];
            for (let i = 0; i < calcModules[exeNowCalc].NOI; i++) {
                dataInCalcDrop['in' + i] = document.getElementById(calcModules[exeNowCalc]['in' + i]);
                nowInputData.push(dataInCalcDrop['in' + i].value);
            }
            if (!comparisonArr(nowInputData, lastInputData) || calcModules[exeNowCalc].forciblyExe == true) {
                calcModules[exeNowCalc]['main'](dataInCalcDrop);
                //console.log("asd");
                lastInputData = nowInputData;

            }
            //console.log(dataInCalcDrop)


            if (exeNowCalc != exeNowCalcLast) {
                document.getElementById(calcModules[exeNowCalc].divId).style.display = 'contents';
                for (let i = 0; i < calcModules.length; i++) {
                    if (i == exeNowCalc) { continue; }
                    document.getElementById(calcModules[i].divId).style.display = 'none';
                }

                exeNowCalcLast = exeNowCalc;
                if (!calcModules[exeNowCalc].DSS) {
                    localStorage.opencalc = exeNowCalc;
                }


            }

        }
    }
}, 30)


document.addEventListener("DOMContentLoaded", () => {

    start_scripts = true;
    for (let i = 0; i < 2; i++) {
        addNewInputCal3();
        addNewInputCal5();
    }
    exeNowCalc = Number(localStorage.opencalc);

});