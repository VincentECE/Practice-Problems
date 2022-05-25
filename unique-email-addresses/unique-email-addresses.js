/**
 * @param {string[]} emails
 * @return {number}
 */


 var numUniqueEmails = function(emails) {
  let storage = {};

  emails.forEach((email)=> {
      let lowercaseEmail = email.toLowerCase();
      let atFlag = false;
      let plusFlag = false;
      let trimmedEmail = [];

      for(let i = 0; i < lowercaseEmail.length; i++) {
          if(lowercaseEmail[i] === '+') {
              plusFlag = true;
          }

          if(lowercaseEmail[i] === '@') {
              atFlag = true;
          }

          if((lowercaseEmail[i] !== '.' && plusFlag === false) || atFlag === true) {
              trimmedEmail.push(lowercaseEmail[i]);
          }

      }

      storage[trimmedEmail.join('')] = true;
  })

  console.log('\U0001f680 ~ storage', storage)
  return Object.keys(storage).length;
};