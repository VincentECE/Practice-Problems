/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let map = {}; // to keep track of the 0's we set so we don't turn the whole map into 0's
    let rowLength = matrix[0].length;
    let columnLength = matrix.length;

    for(let column = 0; column < columnLength; column++) {
        for(let row = 0; row < rowLength; row++) {
            let mapKey = `${column}:${row}`;
            
            if(matrix[column][row] === 0 && map[mapKey] === undefined) {
                
                for(let innerRow = 0; innerRow < rowLength; innerRow++) {
                    let innerMapKey = `${column}:${innerRow}`;
                    
                    if(map[innerMapKey] === undefined && matrix[column][innerRow] !== 0) {
                        map[innerMapKey] = true;
                        matrix[column][innerRow] = 0;
                    }
                }
                
                for(let innerColumn = 0; innerColumn < columnLength; innerColumn++) {
                    let innerMapKey = `${innerColumn}:${row}`;
                    
                    if(map[innerMapKey] === undefined && matrix[innerColumn][row] !== 0) {
                        map[innerMapKey] = true;
                        matrix[innerColumn][row] = 0;
                    }
                }

            }
        }
    }
    
    
    return matrix;
};