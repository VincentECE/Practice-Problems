/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let targetFound = false;
    let yTopPointer = 0;
    let yBottomPointer = matrix.length - 1;
    let xLeftPointer = 0;
    let xRightPointer = matrix[0].length -1;
    let rowFlag = false;
    let columnMidpoint;
    let rowMidpoint;
    let currentRow;

    //find which row to target
    while(yTopPointer <= yBottomPointer && rowFlag === false){
        columnMidpoint = Math.floor((yTopPointer + yBottomPointer) / 2);
        currentRow = matrix[columnMidpoint];
        
        //sets rowflag to true if the target is possibly in this row. columnMidpoint doesn't change anymore after this
        if(currentRow[0] <= target && currentRow[currentRow.length -1] >= target) {
            rowFlag = true;
        }
        
        if(currentRow[0] > target) {
            yBottomPointer = columnMidpoint - 1;
        }
        
        if(currentRow[currentRow.length -1] < target) {
            yTopPointer = columnMidpoint + 1;
        }
    }
    
    // at this point, columnMidpoint should be pointing to the row that we want. if not then the rowFlag would still be false
    
    while(xLeftPointer <= xRightPointer && rowFlag === true) {
        rowMidpoint = Math.floor((xLeftPointer+xRightPointer) / 2);
        
        if(currentRow[rowMidpoint] === target) {
            targetFound = true;
            break;
        }
        
        if(currentRow[rowMidpoint] > target) {
            xRightPointer = rowMidpoint - 1;
        }
        
        if(currentRow[rowMidpoint] < target) {
            xLeftPointer = rowMidpoint + 1;
        }
    }
   
    return targetFound;
};

