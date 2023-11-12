// 1일차 Big O Notation //

// 문제. 1에서 특정한 N 값과 사이에 있는 모든 숫자들을 더하는 함수를 작성 //
// ex.1) 시간복잡도 O(n) //
function addUpTO1(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    // + : 1번 => 연산을 1번하는 것처럼 보이나 Loop라 매개변수 n의 값에 따라 횟수가 정해짐 1 * n //
    return total;
}

console.log(addUpTO1(5));
console.log(addUpTO1(100));

// ex.2) 시간복잡도 O(1) //
function addUpTo2(n) {
    return n * (n + 1) / 2;
    // * : 1번 | + : 1번 | / : 1번 => 연산을 3번 사용 // 
}

console.log(addUpTo2(5));
console.log(addUpTo2(100));

// 시간복잡도 구하기 예시 //
let t1 = performance.now();
addUpTO1(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

// 시간복잡도 O(n²) //
function printAllPairs(n) {
    for(let i = 0; i < n; i ++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

console.log(printAllPairs(5));

// 시간복잡도 O(n) //
function logAtLeast5(n) {
    for(let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

// 시간복잡도 O(1) //
function logAtMost5(n) {
    for(let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// 시간복잡도 O(2n) => O(n) //
function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
}

// 공간복잡도 O(1) //
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
}

// 공간복잡도 O(n) // 
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(2 * arr[i]);
    }
    return newArr;
}