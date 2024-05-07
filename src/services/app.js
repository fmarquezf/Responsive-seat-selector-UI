import { writeFile } from 'fs';

var obj = {
    seats : [],
    rows : []
};

var section = ""
var rowGroup = 0
var selection = false
const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"]

rows.map((row) => {
    obj.rows.push(row)
    for (let i = 1; i < 19; i++){
        if (i < 5) {
            section = "A"
        }
        else if (i > 14) {
            section = "C"
        }
        else {
            section = "B"
        }
        if (rows.indexOf(row) < 4) {
            rowGroup = 1
        }
        else if (rows.indexOf(row) > 7) {
            rowGroup = 3
        }
        else{
            rowGroup = 2
        }
        switch (row) {
            case "C":
                if ((7 < i && i < 11)) {
                    selection = null
                }
                break;
            case "D":
                if ((3 < i && i < 7) || (12 < i && i < 17)) {
                    selection = null
                }
                break;
            case "E":
                if ((8 < i && i < 16) || i == 19 || i == 20) {
                    selection = null
                }
                break;
            case "F":
                if (i==1 || i==2 || (5 < i && i < 10) || (11 < i && i < 16)) {
                    selection = null
                }
                break;
            case "G":
                if ((7 < i && i < 11)){
                    selection = null
                }
                break;
            case "H":
                if (i==1 || i==2 || (5 < i && i < 10) || (12 < i && i < 16)) {
                    selection = null
                }
                break;
            case "I":
                if (i==1 || i==2 || (4 < i && i < 10)) {
                    selection = null
                }
                break;
            case "J":
                if ((10 < i && i < 15)) {
                    selection = null
                }
                break;
            case "K":
                if (i==1 || i==2) {
                    selection = null
                }
                break;
        }
        obj.seats.push(
            {
                id: row + i,
                row: row,
                col: i,
                section: section,
                rowGroup: rowGroup,
                isSelected : selection
            }
                );
                selection = false
    }
})


var json = JSON.stringify(obj);

writeFile('./src/data.json', json, 'utf8', function(err) {
    if (err) throw err;
    console.log('complete');
    }
    );