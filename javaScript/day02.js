let instructor = {
    firstName : "Kelly",
    isInstructor : true,
    favoriteNumbers : [1, 2, 3, 4]
}

// firstName    isInstructor    favoriteNumbers

// O(n)
console.log(Object.keys(instructor));

// O(n)
console.log(Object.values(instructor));

// O(n)
console.log(Object.entries(instructor));

// O(1)
console.log(instructor.hasOwnProperty("firstName"));

let names = ["Michael", "Melissa", "Andrea"];
// O(1) 배열의 맨 뒤에 데이터를 추가할 때
names.push("Raj");
// O(n) 배열의 맨 뒤를 제외한 데이터를 추가/제거할 때

let values = [true, {}, [], 2, "awesome"];

// 문제. 입력하는 문자열의 각 문자 수를 반화하는 함수를 만들어라
// 1)
function charCount1(str) {
    // 빈 객체를 생성
    let result = {};
    // Loop 를 이용
    for(let i = 0; i < str.length; i++) {
        // char 라는 변수를 생성하여 str의 인덱스 번호에 해당하는 문자를 할당 및 소문자 형태로 변환하여 할당
        let char = str[i].toLowerCase();
        // 만약 result 객체에 추가된 char의 값이 0보다 크다면 (해당 문자가 이미 입력되어 있다면)
        if(result[char] > 0) {
            // 해당 result[char]의 값 1증가
            result[char]++;
        }else {
            // result[char]에 해당하는 값이 0이라면 (해당 문자가 처음 입력되어 있다면) 값 1 할당
            result[char] = 1;
        };
    }
    // 객체를 반환
    return result;
}
console.log(charCount1("helloHELLO"));

// 2)
function charCount2(str) {
    // 빈 객체를 생성
    let result = {};
    // Loop 를 이용
    for(let i = 0; i < str.length; i++) {
        // char 라는 변수를 생성하여 str의 인덱스 번호에 해당하는 문자를 할당 및 소문자 형태로 변환하여 할당
        let char = str[i].toLowerCase();
        // /[a-z0-9]/.test() 정규표현식 관련 메서드를 이용(문자가 소문자 a~z 혹은 0~9에 해당하는지 검사)
        if(/[a-z0-9]/.test(char)) {
            // 만약 result 객체에 추가된 char의 값이 0보다 크다면 (해당 문자가 이미 입력되어 있다면)
            if (result[char] > 0) {
                // 해당 result[char]의 값 1증가
                result[char]++;
            }else {
                // result[char]에 해당하는 값이 0이라면 (해당 문자가 처음 입력되어 있다면) 값 1 할당
                result[char] = 1;
            }
        }
    }
    // 객체를 반환
    return result;
}

// 3)
function charCount3(str) {
    // 빈 객체를 생성
    let result = {};
    // Loop 를 이용
    for(let char of str) {
        // char 라는 변수를 생성하여 str의 인덱스 번호에 해당하는 문자를 할당 및 소문자 형태로 변환하여 할당
        char = char.toLowerCase();
        // /[a-z0-9]/.test() 정규표현식 관련 메서드를 이용(문자가 소문자 a~z 혹은 0~9에 해당하는지 검사)
        if(/[a-z0-9]/.test(char)) {
            // result[char] 의 값이 이미 존재한다면 해당 result[char] 값 증가 아니라면 1을 할당
            result[char] = ++result[char] || 1;
        }
    }
    // 객체를 반환
    return result;
}

// 4)
function isAlphaNumeric(char) {
    // charCodeAt() 해당 문자에 대한 숫자 반환 값을 code 에 할당 (ASCII Code)
    let code = char.charCodeAt(0);
    // 만약 해당 반환된 코드 값들이 숫자 문자가 아닐경우 false
    if(!(code > 47 && code < 58) && // numeric(0~9)
       !(code > 64 && code < 91) && // upper alpha(A~Z)
       !(code > 96 && code <123)){  // lower alpha(a~z)
        
       return false;
    }
    return true;
}

function charCount4(str) {
    // 빈 객체를 생성
    let result = {};
    // Loop 를 이용
    for(let char of str) {
        // char 라는 변수를 생성하여 str의 인덱스 번호에 해당하는 문자를 할당 및 소문자 형태로 변환하여 할당
        char = char.toLowerCase();
        // /[a-z0-9]/.test() 정규표현식 관련 메서드를 이용(문자가 소문자 a~z 혹은 0~9에 해당하는지 검사)
        if(isAlphaNumeric(char)) {
            // result[char] 의 값이 이미 존재한다면 해당 result[char] 값 증가 아니라면 1을 할당
            result[char] = ++result[char] || 1;
        }
    }
    // 객체를 반환
    return result;
}
