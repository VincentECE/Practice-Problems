/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    let columnMin = 0;
    let columnMax = matrix.length - 1;
    let rowMax = matrix[0].length - 1;
    let rowMin = 0;

    while (columnMin <= columnMax && rowMin <= rowMax) {
       //left to right
        for(let i = rowMin; i <= rowMax; i++) {
            result.push(matrix[columnMin][i]);
        }

        //top to bottom
        for(let i = columnMin + 1; i <= columnMax; i++) {
            result.push(matrix[i][rowMax])
        }

        //right to left
        for(let i = rowMax - 1; i >= rowMin; i--) {
            if(columnMin === columnMax) break;

            result.push(matrix[columnMax][i]);
        }

        //bottom to top
        for(let i = columnMax - 1; i >= columnMin + 1; i--) {

            if(rowMax === rowMin) break;

            result.push(matrix[i][rowMin]);
        }

        columnMin++;
        columnMax--;
        rowMin++;
        rowMax--;
    }
    return result;


};

module.exports = spiralOrder;

// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9],
//  [10,11,12],
//  [13,14,15]]

//[[1,2,3],[4,5,6],[7,8,9]]

//[[1, 2, 3, 4],
// [5, 6, 7, 8],
// [9,10,11,12]]

//[[6,9,7]]