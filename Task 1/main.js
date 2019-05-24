// JavaScript Basics

console.log('Starting javascript...');
var myName = 'Jun Xu';
console.log(myName);
var age = 30;
console.log(age);
var ignasiAge = 32;
var ageDiff = age - ignasiAge;
console.log(ageDiff)
if (age > 21) {
    console.log('You are older than 21')
} else {
    console.log('You are not older than 21')
}
if (age < ignasiAge) {
    console.log('Ignasi is older than you')
} else if (age == ignasiAge) {
    console.log('You have the same age as Ignasi')
} else {
    console.log('Ignasi is younger than you')
}




// JavaScript Array Functions
// Exercise 1

var ubiGang = ['Jun', 'Mike', 'Ottavia', 'Filippo', 'Loren', 'Nagendra']

ubiGang.sort();

console.log(ubiGang[0]);

console.log(ubiGang[ubiGang.length - 1]);

ubiGang.forEach(function (value, index) {
    console.log(value, index)
});

for (var i = 0; i < ubiGang.length; i++) {
    console.log(ubiGang[i])
}


// Exercise 2

var ubiGangAge = [30, 25, 28, 30, 27, 28];

var num = 0;

while (num < ubiGangAge.length) {
    console.log(ubiGangAge[num]);
    num++;
}

var numEven = 0;

while (numEven < ubiGangAge.length) {
    if (ubiGangAge[numEven] % 2 === 0) {
        console.log(ubiGangAge[numEven])
    };
    numEven++;
}

for (var numOdd = 0; numOdd < ubiGangAge.length; numOdd++) {
    if (ubiGangAge[numOdd] % 2 !== 0) {
        console.log(ubiGangAge[numOdd])
    }
}


// Exercise 3-5
var numArray = [50, 48, 3, 2, 4, 0, 99, -10]


// solution 1

function leastNumber(array) {
    console.log(Math.min.apply(null, array));
};

leastNumber(numArray);

function biggestNumber(array) {
    console.log(Math.max.apply(null, array));
};

biggestNumber(numArray);


// solution 2

function smallestNum(array) {
    var resultNum = array[0];
    for (i = 0; i < array.length; i++) {
        if (resultNum >= array[i]) {
            resultNum = array[i]
        }
    }
    console.log(resultNum)
}

smallestNum(numArray)

function biggestNum(array) {
    var resultNum = array[0];
    for (i = 0; i < array.length; i++) {
        if (resultNum <= array[i]) {
            resultNum = array[i]
        }
    }
    console.log(resultNum)
}

biggestNum(numArray)


function selectArray(array, index) {
    console.log(array[index]);
};

selectArray(numArray, 4);


// Exercise 6

var numArray = [3, 6, 67, 6, 23, 0, 11, 100, 6, 8, 93, 0, 17, 6, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100]


function duplicatesNum(Array) {
    Array.sort();
    var results = [];
    for (var numDup = 0; numDup < Array.length; numDup++) {
        if (Array[numDup] === Array[numDup + 1]) {
            if (results.indexOf(Array[numDup]) < 0) {
                results.push(Array[numDup]);
            }
            results.sort(function (a, b) {
                return a - b
            })
        }
    }
    console.log(results)
};

duplicatesNum(numArray);


// Exercise 7

var myColor = ['Red', 'Green', 'White', 'Black'];

// Solution 1
console.log(myColor.join())

// Solution 2

var myColorString = []

function stringArray(Array) {
    for (i = 0; i < Array.length; i++) {
        myColorString.push('\"' + Array[i] + '\"')
    }
    console.log(myColorString.join())
}

stringArray(myColor)


// JavaScript String Functions
// Exercise 1

var x = 12546987;

function reverseNumber(n) {
    n = n + '';
    var y = n.split("").reverse("").join("");
    console.log(+y)
}

reverseNumber(x)


// Exercise 2

var word = 'ubiqum.good_school';

function reverseWord(n) {
    var result = n.split("").sort().join("");
    console.log(result);
}


reverseWord(word);


// Exercise 3

var text = 'apple juice pineapple';

// Solution 1

function convertCase(string) {
    var lower = string.toLowerCase();
    var resultText = lower.replace(/(^| )(\w)/g, function (match) {
        return match.toUpperCase();
    })
    console.log(resultText)
};

convertCase(text);


// Solution 2

var itemSet = [];

function makeItBig(str) {
    var splitText = str.split(" ")
    for (i = 0; i < splitText.length; i++) {
        var item = splitText[i];
        itemSet.push(item.charAt(0).toUpperCase() + item.slice(1));
    }
    console.log(itemSet.join(" "))
}

makeItBig(text)


// Exercise 4

var randomText = "Web Development Tutorial is very exhaustingly fun"

// var textSet = randomText.split(" ")

// var resultSet = textSet[0]

// var i = 0

// while (i < textSet.length) {
//    if (resultSet.length < textSet[i].length) {
//        resultSet=textSet[i]
//    }
//    i++
//}

// console.log(resultSet)

function longestWord(longText) {
    var textSet = longText.split(" ");
    var resultSet = textSet[0];
    var i = 0;
    while (i < textSet.length) {
        if (resultSet.length < textSet[i].length) {
            resultSet = textSet[i]
        }
        i++
    }
    console.log(resultSet)

}

longestWord(randomText)


function abc(str) {
    var arry = str.split(' ');
    for (i = 0; i < arry.length; i++) {
        arry[i] = arry[i][0].toUpperCase()+arry[i].substr(1)
    }
    return arry.join(' ')
}


console.log(abc('abd ssd dte'))
