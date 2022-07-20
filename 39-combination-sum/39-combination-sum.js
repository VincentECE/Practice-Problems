/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let results = [];

    let dfs = function(index, currentTotal, currentList) {
        if(currentTotal === target) {
            results.push(currentList.slice());
            return;
        }

        if(index >= candidates.length || currentTotal >= target) {
            return;
        }

        currentList.push(candidates[index]);
        dfs(index, currentTotal + candidates[index], currentList);
        currentList.pop();
        dfs(index+1, currentTotal, currentList);
    }

    dfs(0, 0, []);

    return results;
};

module.exports = combinationSum;