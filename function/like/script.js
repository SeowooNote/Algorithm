// 1) getElimentId 를 이용한 좋아요 기능 구현
// 좋아요 상태 (초기값 false 설정)
let likeState1 = false;
// 좋아요 개수
let likeCount1 = document.getElementById("likeCount1");
// 클릭 이벤트
// 1) 화살표 함수
const onClickEventHandler = () => {
    if(likeState1 === false) {
        likeState1 = true;
        // parseInt() : int 로 형변환 
        likeCount1.innerHTML = parseInt(likeCount1.innerHTML) + 1;
    }else {
        likeState1 = false;
        likeCount1.innerHTML = parseInt(likeCount1.innerHTML) - 1;
    }
}
// 2) 함수 (Function)
// function onClickEventHandler() {
//     if(likeState1 === false) {
//         likeState1 = true;
//         likeCount1.innerHTML = parseInt(likeCount1.innerHTML) + 1;
//     }else {
//         likeState1 = false;
//         likeCount1.innerHTML = parseInt(likeCount1.innerHTML) - 1;
//     }
// }

// 2) querySelector 를 이용한 좋아요 기능 구현
// 좋아요 상태 (초기값 false 설정)
let likeState2 = false;
// 클릭 버튼 (addEventListener)
let likeButton2 = document.querySelector("#likeButton2");
// 좋아요 개수 
let likeCount2 = document.querySelector('#likeCount2');
// 클릭 이벤트 (addEventListener)
likeButton2.addEventListener("click", () => {
    if(likeState2 === false) {
        likeState2 = true;
        likeCount2.innerHTML = parseInt(likeCount2.innerHTML) + 1;
    }else {
        likeState2 = false;
        likeCount2.innerHTML = parseInt(likeCount2.innerHTML) - 1;
    }
})

// 3) innerHTML 과 innerText 의 차이를 이용한 좋아요 기능 구현
// 좋아요 상태 (초기값 false 설정)
let likeState3 = false;
// 클릭 버튼 (addEventListener)
let likeButton3 = document.querySelector("#likeButton3");
// 좋아요 개수
let likeCount3 = document.querySelector("#likeCount3");
// 클릭 이벤트 (addEventListener)
likeButton3.addEventListener("click", () => {
    if(likeState3 === false) {
        likeState3 = true;
        likeCount3.innerText = parseInt(likeCount3.innerText) + 1;
    }else {
        likeState3 = false;
        likeCount3.innerText = parseInt(likeCount3.innerText) - 1;
    }
});