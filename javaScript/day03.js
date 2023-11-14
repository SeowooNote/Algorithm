// 주파수 카운터 패턴
// 2개의 배열을 허용하는 same 이라는 함수를 작성하시오.
// 배열의 모든 값이 두 번쨰 배열에 해당하는 값을 반환하여야 한다.
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// 1)
function same1(arr1, arr2) {
    // 배열의 길이가 서로 다르다면 false 반환
    if(arr1.length !== arr2.length){
        return false;
    }
    // Loop 사용
    for(let i = 0; i < arr1.length; i++) {
        // arr2 배열에서의 값들 중 arr1[i]의 제곱값이 있는 index 번호가 존재하는지 확인(없으면 -1 반환)한 값을 correctIndex 에 할당
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // index 번호가 존재하지 않으면 false 반환
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        // arr2 배열에 해당하는 correctIndex 의 값을 1개 삭제
        arr2.splice(correctIndex,1)
    }
    return true;
}

console.log(same1([1, 2, 3, 2],[9, 1, 4, 4]));

// 2)
function same2(arr1, arr2){
    // arr1 과 arr2 배열의 길이가 다르다면 false 반환
    if(arr1.length !== arr2.length){
        return false;
    }
    // frequencyCounter1 객체 생성
    let frequencyCounter1 = {};
    // frequencyCounter2 객체 생성
    let frequencyCounter2 = {};
    // Loop 반복
    for(let val of arr1){
        // frequencyCounter1 배열의 해당 val 인덱스 값에 해당하는 val 요소가 없을 경우 기본값으로 0 을 할당하고
        // 있을 경우에 1 을 증가
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    // Loop 반복
    for(let val of arr2){
        // frequencyCounter2 배열의 해당 val 인덱스 값에 해당하는 val 요소가 없을 경우 기본값으로 0 을 할당하고
        // 있을 경우에 1 을 증가
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;     
    }
    for(let key in frequencyCounter1){
        // frequencyCounter 의 Key 값의 제곱에 해당하는 값이 frequencyCounter2 에 해당하는 값이 없을 경우 false 를 반환
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // frequencyCounter2의 인덱스 값이 키의 제곱에 해당하는 값이 frequencyCounter1의 인덱스 key 값과 동일하지 않을경우 false 를 반환
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    // true 반환
    return true;
}

console.log(same2([1, 2, 3, 2],[9, 1, 4, 4]));

// 아나그램 알고리즘
// 두 개의 문자열이 주어지면 두 번째 문자열이 첫 번째 문자열의 철자법인지 확인하는 함수를 작성하시오.
// 철자 바꾸기(anagram)는 아이스맨(iceman)에서 형성된 시네마(cinema)와 같은 다른 문자를 재배열하여 형성된 단어, 구문 또는 이름입니다.
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
function validAnagram(str1, str2){
    // str1 과 str2 의 배열의 길이가 같지 않을 경우 false 반환
    if(str1.length !== str2.lenght) return false;
    // Loop 사용
    for(let i = 0; i < str1.lenght; i++) {
        // correctIndex 에 str 배열의 값들 중 str1[i] 에 해당하는 값이 있다면 그 인덱스 번호를 할당
        let correctIndex = str2.indexOf(str1[i]);
        // correctIndex 를 찾지 못하는 경우(-1) false 할당
        if(correctIndex === -1) return false;
        // str2 배열에 해당하는 correctIndex 위치의 값을 삭제
        str2.splice(correctIndex, 1);
    }
    // true 반환
    return true;
};
validAnagram('', '');
validAnagram('aaz', 'zza');

// 다중 포인터 패턴
// 정렬된 정수 배열을 받아들이는 sumZero 라는 함수를 작성하시오.
// 함수는 합이 0인 첫 번째 쌍을 찾아야 한다. 합이 0이 되는 두 값을 모두 포함하는 배열을 반환하거나 쌍이 존재하지 않는 경우 정의되지 않은 값(undefined)을 반환한다.
// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined
// 1) 시간 복잡도 : O(n²), 공간 복잡도 : O(1)
function sumZero1(arr) {
    // Loop 사용
    for(let i = 0; i < arr.length; i++) {
        // Loop 사용
        for(let j = i+1; j < arr.length; i++) {
            // arr[i] 와 arr[j] 의 값의 합이 0 일 경우 arr[i] 와 arr[j] 값 반환
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}
console.log(sumZero1([-4, -3, -1, 0, 2, 3, 4]));


// 2) 시간 복잡도 : O(n), 공간 복잡도 : O(1)
function sumZero2(arr) {
    // 왼쪽 포인터 설정
    let left = 0;
    // 오른쪽 포인터 설정
    let right = arr.length - 1;
    // Loop 사용, 왼쪽 포인터의 값이 오른쪽 포인터의 값보다 작을 경우까지 Loop
    while(left < right){
        // 배열의 왼쪽 포인터 인덱스에 해당하는 값 + 배열의 오른쪽 포인터 인덱스에 해당하는 값을 sum 에 할당
        let sum = arr[left] + arr[right];
        // sum 이 0인 경우 해당하는 배열의 값들 반환
        if(sum === 0){
            return [arr[left], arr[right]];
        // sum 이 0보다 큰 경우 즉, 오른쪽 포인터 인덱스에 해당하는 값이 클 경우 이에 해당하는 포인터 인덱스 값 1 감소
        } else if(sum > 0){
            right--;
        // sum 이 0보다 작언 경우 즉, 왼쪽 포인터 인덱스에 해당하는 값이 클 경우 이에 해당하는 포인터 인덱스 값 1 증가
        } else {
            left++;
        }
    }
};
console.log(sumZero2([-4, -3, -1, 0, 2, 3, 4]));

function countUniqueValues(arr){
    // arr 배열의 길이가 0 일 경우 0 반환
    if(arr.length === 0) return 0;
    let standardIndex = 0;
    // Loop 사용
    for(let i = 1; i < arr.length; i++) {
        // standardIndex 에 해당하는 arr 인덱스 값이 i 에 해당하는 arr 인덱스 값과 다르다면
        // standardIndex 1 증가, 그리고 증가된 해당 인덱스 값에 arr 인덱스 값 할당
        if(arr[standardIndex] !== arr[i]) {
            standardIndex++;
            arr[standardIndex] = arr[i];
        }
        // standardIndex 에 해당하는 arr 인덱스 값이 i 에 해당하는 arr 인덱스 값과 같다면
        // i 1 증가 하여 다시 비교되는 Loop
    }
    // 서로 다른 배열의 값의 갯수를 반환해야 하므로 배열은 0부터 시작이라 해당 standardIndex 값에 1 증가 시킨 것이 갯수
    return standardIndex + 1;
}
console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 7]));

// 정수 배열 n 이라는 숫자를 받는 maxSubarraySum 이라는 함수를 작성하시오.
// 이 함수는 배열에 있는 n 연속 요소의 최대 합계를 계산해야 한다.
// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

// 1) 시간 복잡도 : O(n²)
function maxSubarraySum1(arr, num) {
    // 배열의 길이가 num 보다 작으면 null 반환
    if(num > arr.length) return null;
    // max의 초기값 할당
    let max = -Infinity;
    // Loop 사용
    for(let i = 0; i < arr.length - num + 1; i++) {
        // temp 에 0 값 할당
        temp = 0;
        // Loop 사용
        for(let j = 0; j < num; j++) {
            // num 에 해당하는 인덱스 값을 더하여 temp 에 할당
            temp += arr[i + j];
        }
        // temp 값이 max 값보다 크다면 temp 값 max 에 할당
        if(temp > max) {
            max = temp;
        }
    }
    // max 값 반환
    return max;
};
console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 6], 3));

// 2) 시간 복잡도 : O(n)
function maxSubarraySum2(arr, num) {
    // maxSum 의 값 할당
    let maxSum = 0;
    // tempSum 의 값 할당
    let tempSum = 0;
    // arr 배열의 길이가 num 보다 작으면 null 반환
    if(arr.length < num) return null;
    // Loop 사용
    for(let i = 0; i < num; i++) {
        // maxSum 에 arr[i]의 Loop 값들을 모두 더함
        maxSum += arr[i];
    }
    // tempSum 에 maxSum 값 할당
    tempSum = maxSum;
    // Loop 사용
    for(let i = num; i < arr.length; i++) {
        // tempSum 에 맨 첫번째 배열의 값을 빼고 바로 연속되는 배열의 값을 더함
        tempSum = tempSum - arr[i - num] + arr[i];
        // Math 함수를 이용하여 연속되는 경우의 배열의 합 중 Loop 를 돌면서 가장 큰 값을 할당
        maxSum = Math.max(maxSum, tempSum);
    }
    // maxSum 값 반환
    return maxSum;
};
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 6], 3));

// 분할과 정복 패턴
// 정렬된 배열이 주어지면 주어진 값을 받아 함수에 전달된 값이 있는 인덱스를 반환하는 함수를 구하시오.
// 값을 찾을 수 없으면 -1을 반환
// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1
// 1) 시간 복잡도 O(N)
function search1(arr, val){
    // Loop 사용
    for(let i = 0; i < arr.length; i++){
        // arr[i]의 값이 val 값과 같다면 i 값 반환
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

// 2) 시간 복잡도: O(log n), 이진 검색/탐색
// 왼쪽부터 순서대로 탐색하는 것이 아니라 배열의 중간 인덱스 값에 해당하는 값을 중심으로 탐색을 시작(왼쪽 Or 오른쪽)
function searc2(array, val) {
 
    let min = 0;
    let max = array.length - 1;
 
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];
 
        if (array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
 
    return -1;
}
