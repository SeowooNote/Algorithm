// 선형 검색 (Linear Search)
// 시간 복잡도 : O(n)
function linearSearch1(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch1([34, 56, 1, 2], 1));

// JavaScript 의 indexOf() 메소드로 구현
function linearSearch2(arr, val) {
    let check = arr.indexOf(val);
    if(check === -1) return -1;
    else return check;
}
console.log(linearSearch2([0, 1, 2], 2));

// 이진 검색(Binary Search)
function binarySearch(arr, val) {
    // 시작 포인트
    let startIndex = 0;
    // 종료 포인트
    let endIndex = arr.length - 1;
    // 중간 포인트(비교 기준)
    let midIndex = Math.floor((startIndex + endIndex) / 2);

    while(arr[midIndex] !== val && startIndex <= endIndex) {
        if(arr[midIndex] > val) endIndex = midIndex - 1;
        else if(arr[midIndex] <  val) startIndex = midIndex + 1;
        midIndex = Math.floor((startIndex + endIndex) / 2);
    }
    return arr[midIndex] === val ? midIndex : -1;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5], -2));
