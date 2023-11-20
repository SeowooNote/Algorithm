// 코딩 연습 1 : 빈도수 세기
function validAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');
    console.log(str1Arr, str2Arr);
    for(let i = 0; i < str1Arr.length; i++) {
        let correctIndex = str2Arr.indexOf(str1Arr[i]);
        console.log(correctIndex);
        if(correctIndex === -1) return false;
        str2Arr.splice(correctIndex, 1);
    }
    return true;
}
console.log(validAnagram('abc', 'abcde'));
console.log(validAnagram('abc', 'abc'));
console.log(validAnagram('', ''));
console.log(validAnagram('acdfgfr', 'asdasdwerrtt'));