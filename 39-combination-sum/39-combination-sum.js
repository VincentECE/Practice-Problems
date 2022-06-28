/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let results = [];

    const dfs = function (index, currentList, currentTotal) {
        if(currentTotal === target) {
          results.push(currentList.slice());
          return;
        };
        if (currentTotal >= target || index >= candidates.length) {
           return; 
        }
          currentList.push(candidates[index]);
          dfs(index, currentList, currentTotal + candidates[index]);
          currentList.pop();
          dfs(index + 1, currentList, currentTotal); 
    }
    
    dfs(0, [], 0);

    return [...results];
};