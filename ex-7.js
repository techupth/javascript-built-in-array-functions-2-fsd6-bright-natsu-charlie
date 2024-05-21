// solution
// เอาคำมาเเยกเป็นตัวอักษร เเล้วทำการเรียงใหม่จากหน้าไปหลัง
// ถ้าเรียงเสร็จ ให้เอาตัวอักษรมารวมกันเป็นstringเเล้วมาเทียบว่าได้คำเดิมไหม

function isPalindrome(string) {
  // Start coding here
  let charString = string.split("");
  // console.log(charString);
  let reversedChar = charString.reverse("");
  // console.log(reversedString);
  let reversedString = reversedChar.join("");
  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
