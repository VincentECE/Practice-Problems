/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let results = [];
    let map = {};
    
    for(let i = 0; i < cpdomains.length; i++) {
        let currentData = cpdomains[i].split(' ');
        let currentVisits = parseInt(currentData[0]);
        let currentFullDomain = currentData[1];
        let subDomains = currentFullDomain.split('.');
        let subDomain = [];
        
        for(let j = subDomains.length-1; j >= 0; j--) {
            subDomain.unshift(subDomains[j]);
            
            let currentSubDomain = subDomain.join('.');
            
            if(map[currentSubDomain] === undefined) {
                map[currentSubDomain] = currentVisits;
            } else {
                map[currentSubDomain] += currentVisits;
            }
        }
    }
    
    Object.keys(map).forEach((domain) => {
        results.push(`${map[domain]} ${domain}`);
    });
    
    return results;
};