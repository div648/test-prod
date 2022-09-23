function pass() { }


let newCalc0 = {
    NOI: 9,
    in0: 'cal0-in0-trans',
    in1: 'cal0-in1-trans',
    in2: 'cal0-in2-trans',
    in3: 'cal0-in0-cal',
    in4: 'cal0-in1-cal',
    in5: 'cal0-in2-cal',
    in6: 'cal0-in3-cal',
    in7: 'cal0-in4-cal',
    in8: 'cal0-in5-cal',
    main: countCal0,
    forciblyExe: false,
    DSS: false,
    divId: 'cal0'

}
calcModules.push(newCalc0);



let newCalc1 = {
    NOI: 4,
    in0: 'cal1-in0-cal',
    in1: 'cal1-in1-cal',
    in2: 'cal1-in2-cal',
    in3: 'cal1-in3-cal',
    main: countCal1,
    forciblyExe: false,
    DSS: false,
    divId: 'cal1'

}
calcModules.push(newCalc1);


let newCalc2 = {
    NOI: 4,
    in0: 'cal2-in0-cal',
    in1: 'cal2-in1-cal',
    in2: 'cal2-in2-cal',
    in3: 'cal2-in3-cal',
    main: countCal2,
    forciblyExe: false,
    DSS: false,
    divId: 'cal2'

}
calcModules.push(newCalc2);

let newCalc3 = {
    NOI: 0,
    in0: 'cal3-in0-cal',
    main: countCal3,
    forciblyExe: true,
    DSS: false,
    divId: 'cal3'

}
calcModules.push(newCalc3);

let newCalc4 = {
    NOI: 1,
    in0: 'cal4-in0-cal',
    main: countCal4,
    forciblyExe: false,
    DSS: false,
    divId: 'cal4'

}
calcModules.push(newCalc4);


let newCalc5 = {
    NOI: 1,
    in0: 'cal5-in0-cal',
    main: countCal5,
    forciblyExe: true,
    DSS: false,
    divId: 'cal5'

}
calcModules.push(newCalc5);


let debuggingWindow = {
    NOI: 1,
    in0: 'db-in0',
    main: dbFunc,
    forciblyExe: true,
    DSS: true,
    divId: 'debagDiv'

}

calcModules.push(debuggingWindow);