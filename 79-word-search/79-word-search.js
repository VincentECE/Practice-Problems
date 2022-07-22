/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let foundFlag = false;
    
    for(let column = 0; column < board.length; column++) {
        for(let row = 0; row < board[0].length; row++) {
            if(checkFromPosition(board, column, row, word) === true) {
                foundFlag = true;
                break;
            }
        }
        
        if(foundFlag === true) {
            break;
        }
    }
    
    return foundFlag;
};

function checkFromPosition(board, column, row, word) {
    let wordIndexMax = word.length -1;
    let foundFlag = false;
    let columnIndexMax = board.length-1;
    let rowIndexMax = board[0].length-1;
    
    let innerFunc = function(currentColumn, currentRow, wordIndex, markedMap) {
        let targetLetter = word[wordIndex];
        
        if(foundFlag === true) return;
        
        if(board[currentColumn][currentRow] !== targetLetter) {
            return;
        }
        
        markedMap[`${currentColumn}:${currentRow}`] = true;
        
        if(board[currentColumn][currentRow] === targetLetter && wordIndex === wordIndexMax) {
            foundFlag = true;
            return;
        }
        
        //check up
        if(markedMap[`${currentColumn-1}:${currentRow}`] === undefined && currentColumn !== 0) {
            innerFunc(currentColumn-1, currentRow, wordIndex+1, {...markedMap});
        }
        
        //check down
        if(markedMap[`${currentColumn+1}:${currentRow}`] === undefined && currentColumn !== columnIndexMax) {
            innerFunc(currentColumn+1, currentRow, wordIndex+1, {...markedMap});
        }
        
        //check right
        if(markedMap[`${currentColumn}:${currentRow+1}`] === undefined && currentRow !== rowIndexMax) {
            innerFunc(currentColumn, currentRow+1, wordIndex+1, {...markedMap});
        }
        
        //check left
        if(markedMap[`${currentColumn}:${currentRow-1}`] === undefined && currentRow !== 0) {
            innerFunc(currentColumn, currentRow-1, wordIndex+1, {...markedMap});
        }
    }
    
    innerFunc(column, row, 0, {});
    
    
    return foundFlag;
};


// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// "ABCCED"
// true

// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// "ABCB"
// false

// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// "ABCCED"

// [["a","b"],["c","d"]]
// "acdb"
// a b
// c d

// [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]]
// "ABCESEEEFS"
// true

// A B C E
// S F E S
// A D E E

// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// "SEE"

// [["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"]]
// "AAAAAAAAAAAABAA"

// function checkFromPosition(board, column, row, word) {
//     // let markedMap = {};
//     let wordIndexMax = word.length -1;
//     let foundFlag = false;
//     let columnIndexMax = board.length-1;
//     let rowIndexMax = board[0].length-1;
    
//     let innerFunc = function(currentColumn, currentRow, wordIndex, markedMap) {
//         let targetLetter = word[wordIndex];
        
//         if(board[currentColumn][currentRow] !== targetLetter) {
//             return;
//         }
        
//         let tempKey = `${currentColumn}:${currentRow}`;
//         markedMap[tempKey] = true;
        
//         if(board[currentColumn][currentRow] === targetLetter && wordIndex === wordIndexMax) {
//             foundFlag = true;
//             return;
//         }
        
//         //check up
//         let mapKey = `${currentColumn-1}:${currentRow}`;
        
//         if(markedMap?.[mapKey] === undefined && currentColumn !== 0) {
//             innerFunc(currentColumn-1, currentRow, wordIndex+1, {...markedMap});
//         }
        
//         //check down
//         mapKey = `${currentColumn+1}:${currentRow}`;
        
//         if(markedMap?.[mapKey] === undefined && currentColumn !== columnIndexMax) {
//             innerFunc(currentColumn+1, currentRow, wordIndex+1, {...markedMap});
//         }
        
//         //check right
//         mapKey = `${currentColumn}:${currentRow+1}`;
        
//         if(markedMap?.[mapKey] === undefined && currentRow !== rowIndexMax) {
//             innerFunc(currentColumn, currentRow+1, wordIndex+1, {...markedMap});
//         }
        
//         //check left
//         mapKey = `${currentColumn}:${currentRow-1}`;
        
//         if(markedMap?.[mapKey] === undefined && currentRow !== 0) {
//             innerFunc(currentColumn, currentRow-1, wordIndex+1, {...markedMap});
//         }
//     }
    
//     innerFunc(column, row, 0, {});
    
    
//     return foundFlag;
// };



// function checkFromPosition(board, column, row, word) {
//     let wordIndexMax = word.length -1;
//     let foundFlag = false;
//     let columnIndexMax = board.length-1;
//     let rowIndexMax = board[0].length-1;
    
//     let innerFunc = function(currentColumn, currentRow, wordIndex, markedMap) {
//         let targetLetter = word[wordIndex];
        
//         if(board[currentColumn][currentRow] !== targetLetter) {
//             return;
//         }
        
//         console.log(board[currentColumn][currentRow])
        
//         markedMap[`${currentColumn}:${currentRow}`] = true;
        
//         if(board[currentColumn][currentRow] === targetLetter && wordIndex === wordIndexMax) {
//             foundFlag = true;
//             return;
//         }
        
//         //check up
        
//         if(markedMap[`${currentColumn-1}:${currentRow}`] === undefined && currentColumn !== 0) {
//             innerFunc(currentColumn-1, currentRow, wordIndex+1, {...markedMap});
//         }
        
//         //check down
        
//         if(markedMap[`${currentColumn-1}:${currentRow}`] === undefined && currentColumn !== columnIndexMax) {
//             innerFunc(currentColumn+1, currentRow, wordIndex+1, {...markedMap});
//         }
        
//         //check right
        
//         if(markedMap[`${currentColumn}:${currentRow+1}`] === undefined && currentRow !== rowIndexMax) {
//             innerFunc(currentColumn, currentRow+1, wordIndex+1, {...markedMap});
//         }
        
//         //check left
        
//         if(markedMap[`${currentColumn}:${currentRow-1}`] === undefined && currentRow !== 0) {
//             innerFunc(currentColumn, currentRow-1, wordIndex+1, {...markedMap});
//         }
//     }
    
//     innerFunc(column, row, 0, {});
    
    
//     return foundFlag;
// };