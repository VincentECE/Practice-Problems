/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
    let accessMap = {};
    let offenders = {};
    
    for(let i = 0; i < keyName.length; i++) {
        let name = keyName[i];
        
        if(accessMap[name] === undefined) {
            accessMap[name] = [keyTime[i]];
        } else {
            accessMap[name].push(keyTime[i]);
        }
    }
    
    let keys = Object.keys(accessMap);
    
    for(let i = 0; i < keys.length; i++) {
        let name = keys[i];
        let timeArr = accessMap[name].sort();
        
        if(timeArr.length < 3) {
            continue;
        }
        
        let leftPointer = 0;
        
        for(let rightPointer = 2; rightPointer < timeArr.length; rightPointer++) {
            let leftTime = timeArr[leftPointer].split(':');
            let leftTimeSeconds = (parseInt(leftTime[0]) * 60 * 60) + (parseInt(leftTime[1]) * 60);
            let rightTime = timeArr[rightPointer].split(':');
            let rightTimeSeconds = (parseInt(rightTime[0]) * 60 * 60) + (parseInt(rightTime[1]) * 60);
            
            console.log(name, Math.abs(rightTimeSeconds - leftTimeSeconds))
            
            if(Math.abs(rightTimeSeconds - leftTimeSeconds) <= 3600) {
                offenders[name] = true;
                continue;
            }
            
            leftPointer++;
        }
    }
    
    console.log(accessMap)
    
    return Object.keys(offenders).sort();
};

//3600 = 1 hour

// ["daniel","daniel","daniel","luis","luis","luis","luis"]
// ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]

// ["john","john","john"]
// ["23:58","23:59","00:01"]
// [];

// ["leslie","leslie","leslie","clare","clare","clare","clare"]
// ["13:00","13:20","14:00","18:00","18:51","19:30","19:49"]
// ["clare","leslie"]

// ["a","a","a","a","a","b","b","b","b","b","b"]
// ["23:20","11:09","23:30","23:02","15:28","22:57","23:40","03:43","21:55","20:38","00:19"]
// ["a"]

// ["a","a","a","a","a","b","b","b","b","b","b"]
// ["04:48","23:53","06:36","07:45","12:16","00:52","10:59","17:16","00:36","01:26","22:42"]
// ["b"]