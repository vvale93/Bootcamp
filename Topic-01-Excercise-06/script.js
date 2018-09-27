const matrix = [
    ['Character', 'Actor', 'Other Movie', 'Birthday'],
    ['Neo', 'Keanu Reeves', 'John Wick', '02/09/1964'],
    ['Morfeo', 'Laurence Fishburne', 'Passengers', '30/07/1961'],
    ['Trinity', 'Carrie-Anne Moss', 'Pompeii', '21/08/1967'],
    ['Agent Smith', 'Hugo Weaving', 'The Lord of the Rings', '04/04/1960'],
  ];

function createTable(matrix) {
    let ref = document.getElementById('table');
    for (let rows = 0; rows < matrix.length; rows++) {
        let eachRow = document.createElement('tr');
        for (let columns = 0; columns < matrix[rows].length; columns++) {
            if (rows == 0) {
                let tag = document.createElement('th');
                let content = document.createTextNode(matrix[rows][columns]);
                tag.setAttribute('class', 'tableHeader');
                tag.appendChild(content);
                eachRow.appendChild(tag);
            } else {
                let tag = document.createElement('td');
                let content = document.createTextNode(matrix[rows][columns]);
                tag.setAttribute('class', 'tableElement');
                tag.appendChild(content);
                eachRow.appendChild(tag);
            }
        }
        ref.appendChild(eachRow);
    }
}
createTable(matrix);
