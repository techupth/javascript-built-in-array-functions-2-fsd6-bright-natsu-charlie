function isPalindrome(string) {
  // Start coding here
  return string === string.split("").reverse().join("");
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false

const isPalindromeMai = (string) => {
  let indexStart = 0;
  let indexStop = string.length - 1;
  string = string.toLowerCase();
  let notCountSet = [" ", ","];
  while (indexStart < indexStop) {
    while (notCountSet.includes(string[indexStart])) {
      indexStart += 1;
    }
    while (notCountSet.includes(string[indexStop])) {
      indexStop -= 1;
    }
    if (string[indexStart] !== string[indexStop]) {
      return false;
    } else {
      indexStart += 1;
      indexStop -= 1;
    }
  }
  return true;
};

console.log(isPalindromeMai("reviver")); // true
console.log(isPalindromeMai("บวบ")); // true
console.log(isPalindromeMai("deliver")); // false
