// Extra Excercise 2
// Solution 1 - without prompt input


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


function printTable(table) {
    var title = document.getElementsByTagName('h1')[0];
    title.parentNode.insertBefore(table, title.nextSibling)
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
    printTable(table)
}


// Solution 2 - with prompt input and forEach syntax


function createTable2() {
    var a = prompt("Please give the number of rows:");
    var b = prompt("Please give the number of columns:");
    var tbody = document.createElement('tbody');
    var table = document.createElement('table');
    var rows = createRowsArray(a);
    rows.forEach(function (row) {
        row = document.createElement('tr');
        var cols = createColsArray(b);
        cols.forEach(function (col) {
            col = document.createElement('td');
            row.appendChild(col);
        });
        tbody.appendChild(row);
    })
    
    table.appendChild(tbody);
    var btn = document.getElementById('table-button');
    btn.parentNode.insertBefore(table, btn.nextSibling);
}

var btn = document.getElementById('table-button');
btn.addEventListener('click', createTable2)




