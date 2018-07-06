// 1 Get 1 to 255
function one() {
    var array = []
    for (var i = 1; i < 256; i ++) {
        array.push(i);
    }
    return array;
}

// 2 Get even 1000
function two() {
    var n = 0
    for (var i = 0; i <= 1000; i ++) {
        if (i % 2 === 0) {
            n += i;
        } else {
        }
    }
    return n;
}

// 3 Sum odd 5000
function three() {
    var n = 0
    for (var i = 1; i <= 5000; i ++) {
        if (i % 2 === 1) {
            n += i;
        } else {
        }
    }
    return n;
}

// 4 Iterate an array
function four(a) {
    var n = 0;
    var arrayLength = a.length;
    for (var i = 0; i < arrayLength; i ++) {
        n += a[i]
        }
    return n;
}

// 5 Find max
function five(a) {
    return Math.max.apply(null, a);
}

// 6 Find average
function getSum(total, num) {
    return total + num;
}
function six(a) {
    var sum = a.reduce(getSum);
    return sum / a.length;
}

// 7 Array odd
function seven() {
    var array = []
    for (var i = 1; i <= 50; i ++) {
        if (i % 2 === 1) {
            array.push(i);
        } else {
        }
    }
    return array;
}

// 8 Greater than Y
function eight(arr, Y) {
    var n = 0;
    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i ++) {
        if (Y < arr[i]) {
            n += 1;
        } else {
        }
    }
    return n;
}

// 9 Squares
function nine(arr) {
    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i ++) {
        arr[i] *= arr[i]
    }
    return arr;
}

// 10 Negatives
function ten(arr) {
    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i ++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        } else {
        }
    }
    return arr;
}

// 11 Max/Min/Avg
function getSum(total, num) {
    return total + num;
}
function ten(arr) {
    var maxMinAvg = [];
    maxMinAvg.push(Math.max.apply(null, arr));
    maxMinAvg.push(Math.min.apply(null, arr));
    maxMinAvg.push(arr.reduce(getSum) / arr.length);
    return maxMinAvg;
}

// 12 Swap Values
function twelve(arr) {
    var first = arr[0];
    var last = arr[arr.length - 1];
    arr[arr.length - 1] = first;
    arr[0] = last;
    return arr;
}

// 13 Number to String
function thirteen(arr) {
    for (var i = 0; i < arr.length; i ++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        } else {
        }
    }
    return arr;
}