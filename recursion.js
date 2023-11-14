/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length==1) return nums[0]
  nums[1]=nums[0]*nums[1];
  nums.shift();
  return product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length==1) return words[0].length;
  if(words[0].length>words[1].length)words[1]=words[0];
  words.shift();
  return longest(words);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if(str.length<=i)return"";
  return str[i]+everyOther(str, i+2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  if(str[i]!=str[str.length-1-i]) return false;
  if(str.length/2>i)return true;
  return isPalindrome(str,i+1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i>=arr.length) return -1;
  if(arr[i]==val) return i;
  return findIndex(arr,val,i+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=1) {
  if(i>str.length) return"";
  return str[str.length-i]+revString(str, i+1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, i=0, keys=[], r=[]) {
  if(keys.length==0)keys=Object.keys(obj);
  if(i>keys.length) return r;
  if(keys.length==0) throw new Error("empty object");
  if(typeof obj[keys[i]] == "object") r = [...r,...gatherStrings(obj[keys[i]])]
  if(typeof obj[keys[i]] == "string") return gatherStrings(obj, i+1, keys, [...r,obj[keys[i]]]);
  return gatherStrings(obj, i+1, keys, r);
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i=0) {
  if(i>arr.length) return -1;
  if(arr[i]==val)return i;
  return binarySearch(arr, val, i+1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
