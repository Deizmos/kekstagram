const checkStringLength = (string, maxLength) => string.length <= maxLength;

const isPalindrome = (string) => {
  const splitString = string.toLowerCase().replaceAll(' ', '');
  return string.toLowerCase().replaceAll(' ', '') === [...splitString].reverse().join('');
};
const isExtractNumber = (el) => typeof el === 'string' ? parseInt(el.replace(/[^0-9]/g, ''), 10) : +String(el).replace(/[^0-9]/g, '');

const isReductionLength = (str, minLength, extraString) => {
  const arrStr = str.split('');
  const arrExtraString = extraString.split('');
  while (arrStr.length < minLength){
    const removalLength = minLength - arrStr.length;
    arrStr.unshift(...arrExtraString.slice(0,removalLength));
  }
  return arrStr.join('');
};

export {
  checkStringLength,
  isPalindrome,
  isExtractNumber,
  isReductionLength,
};
