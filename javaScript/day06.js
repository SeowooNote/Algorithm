// 나이브 문자열 검색
function naiveSearch(long, short) {
    let count = 0;
    for(let i = 0; i < long.length; i++) {
        for(let j = 0; j < short.length; j++) {
            if(short[j] !== long[i + j]) break;
            if(j === short.length - 1) count++ 
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"));

// 기본 내장 자바스크립트 정렬 .sort()
// 유니코드를 기준으로 정렬되어 있는 설정의 내장 정렬 메소드는 문자열을 기준으로는 정렬할 수 있으나
// 숫자의 경우 원하는 값을 도출하기 힘듬
console.log([23, 45, 6, 12, 13].sort());
// 6, 12, 13, 23, 45 의 결과가 나와야 하나 실제로 12, 13, 23, 45, 6 이 나옴
console.log(["banana", "apple", "grape", "organe", "starwberry"].sort());
// 해결책
// 내장 정렬 메소드는 선택적 비교 함수(optional comparator function)를 인자로 전달받음
// 반환되는 값을 토대로 만들 정렬 순서를 자바스크립트에 알림
// 오름차순
// 먼저, 인자값 num1 의 정렬 위치가 앞 그 뒤가 num2 라는 것을 인지할 것
function numberCompare1(num1, num2) {
    return num1 - num2;
    // return 값이 양수가 오면 num1 > num2 이기 때문에 정렬상 num1 이 num2 뒤로 감
    // return 값이 음수가 오면 num1 < num2 이기 떄문에 정렬상 num1 이 num2 앞으로 감
}
// 내림차순
// 먼저, 인자값 num1 의 정렬 위치가 앞 그 뒤가 num2 라는 것을 인지할 것
function numberCompare2(num1, num2) {
    return num2 - num1;
}
console.log([23, 45, 6, 12, 13].sort(numberCompare1));
console.log([23, 45, 6, 12, 13].sort(numberCompare2));
// 문자열의 길이를 기준으로 정렬하기
// 오름차군
function strLengCompare1(str1, str2) {
    return str1.length - str2.length;
}
// 내림차순
function strLengCompare2(str1, str2) {
    return str2.length - str1.length;
}
console.log(["banana", "apple", "grape", "organe", "starwberry"].sort(strLengCompare1));
console.log(["banana", "apple", "grape", "organe", "starwberry"].sort(strLengCompare2));

// 버블 정렬 1)
// O(n²)
function bubbleSort1(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort1([37, 45, 29, 8]));
// [37, 29, 8, 45]
// [29, 8, 37, 45]
// [8, 29, 37, 45]

// 버블 정렬 2) 거의 다 정렬된 상태 - 최적화
// O(n)
function bubbleSort2(arr) {
    let noSwap;
    for(let i = arr.length; i > 0; i--) {
        noSwap = true;
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

console.log(bubbleSort2([37, 45, 29, 8]));
