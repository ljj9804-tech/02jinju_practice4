// 실습1
const lightblue = document.getElementById("clolrBtn"); //색상 변경 버튼

let isColor = true;

lightblue.addEventListener('click', function () {
    if (isColor === true) {
        alert("배경색을 변경합니다.");
        document.body.style.backgroundColor = "lightblue";
    } else {
        alert("배경색을 변경합니다.");
        document.body.style.backgroundColor = "white";
    }
    isColor = !isColor;
});

// 실습2
const input = document.getElementById("input"); //이름 넣을 인풋
const inputBtn = document.getElementById("inputBtn"); //이름인풋 출력 버튼

inputBtn.addEventListener('click',function() {
    if (input.value === "") {
        alert("이름을 입력합니다.");
    }  else {
        document.h1.innerText = "안녕하세요[" + input.value + "]님!"; //여기부터 수정
    }
});


alert("1");


