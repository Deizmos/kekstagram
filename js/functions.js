function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

function isPalindrome(string) {
  const splitString = string.toLowerCase().split(' ').join('');
  return string.toLowerCase().split(' ').join('') === splitString.split('').reverse().join('');
}

function isExtractNumber(el) {
  return typeof el === 'string' ? parseInt(el.replace(/[^0-9]/g, ''), 10) : +String(el).replace(/[^0-9]/g, '');
}

function isReductionLength(str, minLength, extraString) {
  let string = str;
  const arrStr = str.split('');
  const arrExtraString = extraString.split('');
  while (arrStr.length < minLength){
    const removalLength = minLength - arrStr.length;
    arrStr.unshift(...arrExtraString.slice(0,removalLength));
  }
  string = arrStr.join('');
  return string;
}

export {
  checkStringLength,
  isPalindrome,
  isExtractNumber,
  isReductionLength};
