// 제귀 함수 1
function countDown1(num) {
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown1(num);
};
// ex) num = 3
// 3
// countDown1(2)
// 2
// countDown1(1)
// 1
// countDown1(0)
// All done!
countDown1(5);

// 재귀 함수 1 을 반복문으로 변경
function countDown2(num) {
    for(let i = num; i > 0; i--) {
        console.log(i);
    }
    console.log("All done!");
};
countDown2(5);

// 재귀 함수 2
function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1);
};
console.log(sumRange(3));
// 3 + sumRange(2)
// 3 + 2 + sumRange(1)
// 3 + 2 + 1 => 6

// 반복문으로 팩토리얼 구현하기
function factorial1(num) {
    let total = 1;
    for(let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
}
console.log(factorial1(5));

// 재귀 함수를 이용하여 팩토리얼 구하기
function factorial2(num) {
    if(num === 1) return 1;
    return num * factorial2(num - 1);
}
console.log(factorial2(5));

// 헬퍼 메소드 재귀 함수
function collectOdds(arr) {
    let result = [];

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
};
console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 순수 재귀 함수
function collectOddsValues(arr) {
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddsValues(arr.slice(1)));
    return newArr;
}; 
console.log(collectOddsValues([1, 2, 3, 4, 5]));