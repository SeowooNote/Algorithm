# 1일차
## 빅오 표기법(Big O Notation)
### 정의
* 정식으로 입력된 내용이 늘어날 수록 알고리즘에 실행시간이 어떻게 변하는지 설명하는 공식적인 방식
* 입력의 크기와 실행시간의 관계
* 대략적으로 숫자를 세는 것에 붙인 공식적인 표현

### 개념
* 여러가지 코드를 일반적으로 서로 비교하고 성능을 평가하는 방법<br/>
즉, 코드를 분류하거나 비교 할 수 있는 시스템이라고 생각해도 됨

### 시간복잡도(빅오 표기법 단순화)
![Alt text](assets/Pasted-Graphic.png)

### 공간복잡도(빅오 표기법 단순화)
* boolean, 숫자, undefined, null은 자바스크립트에서 모두 불변 공간
* 문자열, reference 타입, 배열, 객체는 O(n) 공간

![Alt text](assets/Pasted-Graphic.png)

### 제약사항
* 측정되는 알고리즘의 시간과 공간 복잡도는 하드웨어에 영향을 받지 않음

# 2일차
## 배열과 오브젝트의 성능 평가
### 객체(Object)의 빅오(Big O)
* 정렬이 필요하지 않을 때 즉, 순서가 필요하지 않은 경우
* 빠른 접근/삽입 및 제거가 필요한 경우
```
Insertion(삽입) : O(1)
Removal(제거) : O(1)
Searching(검색) : O(n)
Access(접근) : O(1)
```
### 객체 메소드의 Big O
```
Object.keys : O(n)
Object.values : O(n)
Object.entries : O(n)
hasOwnProperty : O(1)
```
### 배열(Array)의 빅오(Big O)
* 정렬이 필요할 때 즉, 순서가 필요한 경우
* 빠른 액세스/삽입 및 제거가 필요한 경우
```
Insertion(삽입) : 상황에 따라 다름
Removal(제거) : 상황에 따라 다름
Searching(검색) : O(n)
Access(접근) : O(1)
```
```
push : O(1)
pop : O(1)
shift : O(n)
unshift : O(n)
concat : O(n)
slice : O(n)
splice : O(n)
sort : O(n * log n)
forEach / map / filter / reduce /etc... O(n)
```
### 객체와 배열의 빅오 정리
* 객체는 거의 모든것을 더 빠르게 하지만, 정렬되어 있지 않고
배열은 정렬되어 있지만, 끝에 추가하고 제거하는 작업이 시작에 추가하고 제거하는 작업보다 훨씬 빠르다는 것(시작에 넣거나 뺴면 처음부터 끝까지 영향을 받으면서 전부 인덱스를 다시 정리해야 함, 물론 중간에 넣거나 뺴는것도 똑같음)

## 문제 해결 접근법
### 단계
* 1단계 : 문제의 이해
* 2단계 : 구체적 예제들
* 3단계 : 세부 분석
* 4단계 : 해결 또는 단순화
* 5단계 : 되돌아 보기와 리펙터(Refactor)

# 3일차
## 문제 해결 패턴
### 주파수 카운터 패턴
* 객체나 세트를 사용하여 값의 값/빈도를 수집
* 중첩 루프나 배열/문자열을 사용한 O(n²) 연산의 필요성을 피할 수 있는 경우가 많음
### 빈도 세기 패턴
* 아나그램 빈도 문제가 이에 해당
* ex) 두 개의 문자열이 주어지면 두 번째 문자열이 첫 번째 문자열의 철자법인지 확인하는 함수 알고리즘
### 다중 포인터 패턴
* 인덱스나 위치에 해당하는 포인터 값을 생성하고 특정 조건에 따라 시작, 끝 또는 중간으로 이동하는 알고리즘
* 최소한의 공간 복잡성으로 문제를 해결하는 데 매우 효율적
### 슬아이딩 윈도우 패턴
* 한 위치에서 다른 위치로 배열이나 숫자가 될 수 있는 창을 만드는 것이 포함됨
* 특정 조건에 따라 창이 커지거나 닫힘(새 창이 생성됨)
### 분할과 정복 패턴
* 데이터 세트를 더 작은 청크로 나눈 다음 데이터 하위 세트로 프로세스를 반복하는 작업이 포함됨
* 시간 복잡성을 엄청나게 줄일 수 있음

# 4일차
## 재귀(Recursion)
### 정의
* 자기자신을 호출하는 절차
* 즉, 자기자신을 호출하는 함수를 의미
```
function countDown(num) {
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown1(num);
};
countDown(5); // 5 4 3 2 1 All done!
```
### 스택 호출하기
* 호출 스택은 자바스크립트의 보이지 않는 곳에서 작동하는 정적 데이터 구조(Static Data Structure)
* 항목이 꼭대기에 추가되고 마찬가지로 꼭대기에서부터 제거되며, 함수가 추가되면 이 구조에 추가
### 통상적인 재귀의 잠재적 위험
* 호출 스택의 최대 크기가 존재(최대 스택 크기 초과) 이를 stack Overflow 라고 부름
### 헬퍼 메소드 재귀 설계 패턴
* 재귀적이지 않은 외부 함수(outer function)가 재귀적인 내부 함수(inner function)를 호출하는 패턴
### 순수 재귀
* 배열의 경우 slice, spread 연산자, concat, substr, substring 과 같은 메소드를 사용하면 유용
* 객체의 경우 assign, spread 연산자를 사용하면 유용

# 5일차
## 검색 알고리즘
### 선형 검색(Linear Search)
* 세트 간격으로 이동하면서 한 번에 하나의 항목을 확인하는 식으로 모든 항목을 확인
* 시간 복잡도 : O(n)
### 이진 검색(Binary Search)
* 분류된 배열을 대상으로만 작동하므로 데이터가 분류 즉, 정렬되어 있어야 함(분할 정복)
* 시간 복잡도 : O(log n)
```
1) 해당 배열의 시작, 중간(비교 기준), 끝 포인트 설정
2) 루프를 통해 배열의 중간에 해당하는 값과 검색하고자 하는 값을 비교(서로의 값이 같을 경우 바로 결과값 반환)
3) 배열의 중간에 해당하는 값이 검색하는 값 보다 클 경우, 끝 포인트를 중간 - 1 로 변경
4) 배열의 중간에 해당하는 값이 검색하는 값 보다 작을 경우, 시작 포인트를 중간 + 1 로 변경
5) 변경된 시작이나 끝 포인트 값을 기준으로 중간 포인트 값 재설정
6) 루프를 빠져나와 최종적으로 반환해줄 결과값 설정 후 함수 실행
```
## 나이브 문자열 검색
* 긴 문자열에서 부분 문자열(substring)을 검색하는 것과 관련 
# 6일차
## 버블 정렬
### 정렬 알고리즘
* 컬렉션(collection / ex. 배열)의 항목을 재배열하는 과정
### 기본 내장 자바스크립트 정렬
* 내장된 JavaScript 정렬 메소드는 선택적 비교기능을 허용
* 이 비교 기능을 사용하여 JavaScript 정렬 방법을 알려줄 수 있음
* 요소의 쌍(a 및 b)을 보고 반환 값에 따라 정렬 순서를 결정
* 1) 음수를 반환하는 경우 a 가 b 앞에 와야 함
* 2) 양수를 반화하는 경우 a 는 b 뒤에 와야 함
* 3) 0을 반환하면 정렬에 관한 한 a 와 b 는 동일함
```
// 오름차순 정렬
function numberCompare1(num1, num2) {
  return num1 - num2;
}

[ 6, 4, 15, 10 ].sort(numberCompare1);
// [ 4, 6, 10, 15 ]

// 내림차순 정렬
function numberCompare(num1, num2) {
  return num2 - num1;
}

[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 15, 10, 6, 4 ]

// 문자열은 .length 를 이용하여 이와 동일하게 함수 작성 후 적용
```
### 버블 정렬 : 개요
* 배열을 가장 작은 숫자에서 가장 큰 숫자순으로 오름차순 정렬을 한다면 더 큰 숫자가 한 번에 하나씩 뒤로 이동한다는 것
### 버블 정렬 : 구현
```
function bubbleSort(arr) {
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

bubbleSort([37, 45, 29, 8]);
```
### 버블 정렬 : 최적화
```
function bubbleSort(arr) {
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

bubbleSort([37, 45, 29, 8]);
```