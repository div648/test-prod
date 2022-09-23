function numSi(num, of, to) {
    var res = 0;
    of = Number(of);
    to = Number(to);

    if (of == 10) {
        res = num.toString(to);  // Из 10 ой
        return res;
    } else if (to == 10) {
        res = parseInt(num, of);  // В 10-ую
        return res;
    } else {
        res = parseInt(num, of);
        res = res.toString(to);
        return res;
    }
}

function countNumSi(num0, s0, sign, num1, s1, s2) {
    if (sign == 'x') {
        sign = '*';
    }
    let rez = 0;

    rez = numSi(eval(String(numSi(num0, s0, 10)) + sign + String(numSi(num1, s1, 10))), 10, s2);
    if (isNaN(rez) || rez == undefined || rez == null) {
        return '';
    } else {
        return rez;
    }

}


function isInt(num) {
    return (num ^ 0) === num;
}

function isDirt(num, false_rez = 0) {
    if (Number.isFinite(num)) {
        return num;
    } else {
        return false_rez;
    }
}

function NOK(A) {
    let n = A.length, a = Math.abs(A[0]);
    for (let i = 1; i < n; i++) {
        let b = Math.abs(A[i]), c = a;
        while (a && b) { a > b ? a %= b : b %= a; }
        a = Math.abs(c * A[i]) / (a + b);
    }
    return a;
}

function NOD(A) {
    let n = A.length, x = Math.abs(A[0]);
    for (let i = 1; i < n; i++) {
        let y = Math.abs(A[i]);
        while (x && y) { x > y ? x %= y : y %= x; }
        x += y;
    }
    return x;
}