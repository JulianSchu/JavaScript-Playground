 // Extra Excercise 1

 var bandList = document.getElementById("band-list")

 function myBandList(Array) {
    Array.forEach(function (value, index) {
            var createLiItem = document.createElement('li');
            var bandSelect = value
            var bandName = document.createTextNode(bandSelect)
            createLiItem.appendChild(bandName)
           bandList.appendChild(createLiItem)
        }

    )

}

myBandList(['abc', 'def', 'ght', 'ksadhdfajkös'])

let a = + "abc"
console.log(a)

