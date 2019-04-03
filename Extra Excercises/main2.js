// Extra Excercise 2


function createColsArray(b) {
    var cols = [];
    for (n = 0; n < b; n++) {
        cols.push('col' + (n + 1));
    }
    return cols
}

function createRowsArray(a) {
    var rows = []
    for (m = 0; m < a; m++) {
        rows.push('row' + (m + 1));
    }
    return rows
}


function addMultTable(a, b) {

    var rows = createRowsArray(a)
    var cols = createColsArray(b);

    var table = document.createElement('table')
    var tbody = document.createElement('tbody')

    for (r = 0; r < rows.length; r++) {
        rows[r] = document.createElement('tr');
        for (c = 0; c < cols.length; c++) {
            cols[c] = document.createElement('td')
            rows[r].appendChild(cols[c])
            var textContent = document.createTextNode('a')
            cols[c].appendChild(textContent);
            tbody.appendChild(rows[r]);
        }
    }

    table.appendChild(tbody);
    document.body.appendChild(table)
}

var title = document.getElementsByTagName('h1')[0];
console.log(title)

console.log(title.parentNode)
var table = addMultTable(5, 4)

title.parentNode.insertBefore(table, title.nextSibling)

