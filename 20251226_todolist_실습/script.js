const searchInPut = document.getElementById("searchBox"); //데이터 검색
const textInPut = document.getElementById("taskInput"); //할일 추가 텍스트
const addBtn = document.getElementById("addBtn"); //추가하기 버튼
const myList = document.getElementById("taskList"); //현 상황 그리는 리스트

let todoData = [];

render(todoData);



function render(dataArray) {
    myList.innerHTML = "";
    dataArray.forEach(function (data) {
        myList.innerHTML += `
        <li>
            <span>${data.text}</span >
            <div>
                <button onclick="updateData(${data.id})">수정</button>
                <button onclick="deleteData(${data.id})" > 삭제</button >
            </div >
        </li >
        `;
    });
}

addBtn.addEventListener('click', addData);
function addData() {
    if (textInPut.value === "") {
        alert("내용을 입력해주세요.");
        return;
    }
    const nowTodo = {
        id: Date.now(),
        text: textInPut.value
    }
    todoData.push(nowTodo);
    render(todoData);
    textInPut = "";
}

function updateData(id) {
    const item = todoData.find(data => data.id === id);
    const newText = prompt("수정할 내용을 입력하세요.",item.text);

    if (newText !== null && newText !== "") {
        item.text = newText;
    }
    render(todoData);
}

function deleteData(id) {
    if (confirm("정말로 삭제할까요?")) {
        todoData = todoData.filter(data => data.id !== id);
        render(todoData);
    }
}



alert("1");