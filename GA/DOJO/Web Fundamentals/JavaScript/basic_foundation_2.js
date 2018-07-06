// 1 Biggie Size
function one(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big';
        } else {
        }
    }
    return arr;
}

// 2 Print low, return high
function two(arr) {
    console.log(Math.min.apply(null, arr));
    return Math.max.apply(null, arr);
}

// 3 Print one, return another
function three(arr) {
    var firstOdd = null;
    console.log(arr[arr.length - 1]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            firstOdd = arr[i];
            break;
        } else {
        }
    }
    return firstOdd;
}

// 4 Double vision
function four(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    return newArr;
}

// 5 Count positives
function five(arr) {
    var positives = null;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives += 1
        } else {
        }
    }
    arr[arr.length - 1] = positives;
    return arr;
}

// 6 Evens and odds
function six(arr) {
    var evens = 0;
    var odds = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens += 1;
            if (odds !== 0) {
                odds = 0;
            } else {}
            if (evens >= 3) {
                console.log('Even more so!')
            } else {}
        } else {
            odds += 1;
            if (evens !== 0) {
                evens = 0;
            } else {}
            if (odds >= 3) {
                console.log("That's odd!")
            }
        }
    }
}

// 7 Increment the seconds
function seven(arr) {
    for (var i = 1; i < (arr.length); i += 2) {
        arr[i] += 1;
        console.log(arr[i]);
    }
    return arr;
}

// 8 Previous lengths
function eight(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}

// 9 Add seven to most
function nine(arr) {
    var newArr = []
    for (i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i + 1] + 7);
    }
    return newArr;
}

// 10 Reverse array
function ten_a(arr) {
    var j = arr.length
    for (i = arr.length - 1; i > -1; i--) {
        arr.push(arr[i]);
    }
    return arr = arr.slice(j, );
}

function ten_b(arr) {
    return arr.reverse();
}

function ten_c(arr) {
    var j = arr.length - 1;
    for (i = 0; i < arr.length / 2; i++, j--) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// 11 Outlook: negative
function eleven(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 0 - arr[i]
        } else {
        }
    }
    return arr;
}

// 12 Always hungry
function hungry(element) {
    return element === "food";
}

function twelve(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy")
        }
    }
    if (arr.some(hungry) == false) {
        console.log("I'm hungry")
    }
}

// 13 Swap toward the center

// 14 Scale the array