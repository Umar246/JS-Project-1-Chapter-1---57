//Extra
//Greeting Message
let userName = prompt('Enter Your Name : ')
 userName= userName.toLowerCase();
document.getElementById('greetingMessage').innerHTML= "Assalam O Alaikum "+'<span style= "text-transform:capitalize; color:yellow">'+userName+'</span>'+" !"

//For Output ID
let result = document.getElementById('outputBox')
//For Original String
// let sampleText = document.getElementById('OriginalStringBox').innerHTML = "<p style = 'color: #c7f9cc; text-align : center;'> I Love My Country Pakistan <br> I Love My City Faisalabad <br> I Love My Homeland </p>";
//Array Of Cities
var cities = ["Faisalabad", "Lahore", "Karachi", "Multan", "Sailkot", "Kashmir"];

// Toastify function
function toastify(msg) {
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#c0dee5",
            color: "#1b4965",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

//-------------------------------------------------------------------------------------------
//Buttons Code
// 1-Convert to Lowercase
// function lowercaseText() {
//     let text = document.getElementById('inputBox').value;
//     if (!text) {
//         toastify('Please Enter Some Text')
//         return;
//     }
//     let textTransform = text.toLowerCase();
//     result.innerHTML = '<span style = "font-weight: bold; font-size: 24px;">' + textTransform + '</span>';
// }

// 2-Convert To UpperCase
// function uppercaseText() {
//     let text = document.getElementById('inputBox').value;
//     if (!text) {
//         toastify('Please Enter Some Text')
//         return;
//     }
//     let textTransform = text.toUpperCase();
//     result.innerHTML = '<span style = " font-weight: bold; font-size: 24px;">' + textTransform + '</span>';
// }

// 3-Convert To Capitalize
// function capitalizeText() {
//     let text = document.getElementById('inputBox').value;
//     if (!text) {
//         toastify('Please Enter Some Text')
//         return;
//     }
//     let textTransform = text.toLowerCase()
//     let capitalizeText = '<span style="text-transform: capitalize; font-size:24px; font-weight:bold; color: orange;">"' + textTransform + '"</span>'
//     result.innerHTML = capitalizeText;
// }

// 4- Better Formatting
// function betterFormatting() {
//     let text = document.getElementById('inputBox').value;
//     if (!text) {
//         toastify('Please Enter Some Text')
//         return;
//     }
//     let firstChar = text.charAt(0).toUpperCase()
//     let remaining = text.slice(1).toLowerCase()
//     let betterText = firstChar + remaining;
//     result.innerHTML = '<span style="text-transform: capitalize; font-size:24px; font-weight:bold;">' + betterText; +'</span>'
// }

// 5- Print All Cities
function printCities() {
    // console.log(cities[0])

    result.innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        result.innerHTML += i + 1 + ": " + cities[i] + '<br>'
    }
}

//6- Add Your City In List
function addingCity() {
    let newCity = document.getElementById('inputBox').value;
    if (!newCity) {
        toastify('Please Enter Your City Name In Input Field')
        return;
    }
    if (newCity.length < 3) { //agar words ki length kam hoi to phr b alert show karwya
        toastify('Please Enter Your City Name Correctly')
        return;
    }
    let firstCharacter = newCity.charAt(0).toUpperCase()
    let remainWords = newCity.slice(1).toLowerCase()
    let correctFormat = firstCharacter + remainWords;

    cities.push(correctFormat);
    result.innerHTML = '<span style="font-weight:bold; font-size:20px; color:#344e41" >"' + correctFormat + '"<span> Added To List';

}
// 7- Check Your City In List

function checkCity() {
    let newCity = document.getElementById('inputBox').value;
    if (!newCity) {
        toastify('Please Enter Your City Name In Input Field')
        return;
    }
    if (newCity.length < 3) { //agar words ki length kam hoi to phr b alert show karwya
        toastify('Please Enter Your City Name Correctly')
        return;
    }
    let firstCharacter = newCity.charAt(0).toUpperCase()
    let remainWords = newCity.slice(1).toLowerCase()
    let correctFormat = firstCharacter + remainWords;
    let cityFound = false;
    for (let i = 0; i < cities.length; i++)
        if (cities[i] == correctFormat) {
            cityFound = true;
            result.innerHTML = correctFormat + " Also Exsist In The List"
            return;
        }
    if (cityFound == false) {
        cities.push(correctFormat);
        result.innerHTML = '<span style="font-weight:bold; font-size:20px; color:#344e41" >"' + correctFormat + '"<span> Added To List';
    }
}
// 8-Find This Word
// function findingWord() {
//     let text = sampleText.toLowerCase()
//     let word = document.getElementById('inputBox').value;
//     if (!word) {
//         toastify('Please Enter Word In Input Field To Find;')
//         return;
//     }
//     word = word.toLowerCase()
//     let findWord = text.indexOf(word)
//     // console.log(findWord);
//     if (findWord !== -1) {
//         // Question: How to style specific text in JavaScript? As in Line: 157
//         result.innerHTML = '<span style="font-weight:bold;color:#344e41;font-size:20px;">"' + word + '"<span>' + ' is available in original string at index: ' + findWord;
//     }
//     else {
//         result.innerHTML = '<span style="font-weight:bold;color:#344e41;font-size:20px;">"' + word + '"<span>' + ' is not available in original string its index is: ' + findWord;
//     }
// }

// 9- Replace This Word

// function replaceWord() {
//     let newSampleText = sampleText.toLowerCase();
//     let word = document.getElementById('inputBox').value;
//     if (!word) {
//         toastify('Please Enter Word In Input Field To Replace;')
//         return;
//     }
//     let replaceWith = prompt('Enter Word With You Want To Replace:')
//     if (!replaceWith) {
//         toastify('Please Enter Word With You Want To Replace;')
//         return;
//     } else {
//         // Question: The Following code give output Nan Why???
//         word = word.toLowerCase()
//         replaceWith = replaceWith.toLowerCase()
//         let globalReplace = new RegExp(word, "g")
//         let statement = newSampleText.replace(globalReplace, replaceWith)
//         let finalOutput = '<span style="font-weight:bold; text-transform: capitalize; color:#344e41;">' + + statement + '</span>';
//         result.innerHTML = finalOutput;
//         // Yaha Tak
//     }
// }

//--------------------------------------------------------------------------------------------
//Clear Buttons
// 2-For Output Box
function clear2() {
    document.getElementById('outputBox').innerHTML = "";
}
clear2();
// 1-For input

function inputValue() {
    document.getElementById("inputBox").value = "";
}
inputValue();