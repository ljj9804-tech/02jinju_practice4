const searchBox = document.getElementById("searchBox");
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let todoData = [];

render(todoData);

function render(dataArray) {
    list.innerHTML = "";
    dataArray.forEach(function (data) {
        list.innerHTML += `
    <li>
        <span>${data.text}</span>
        <div>
            <button onclick="updateData(${data.id})">수정</button>
            <button onclick="deleteData(${data.id})">삭제</button>
        </div>
    </li>
        `;
    });
}

//render

addBtn.addEventListener('click', addData);
function addData() {
    if (input.value === "") {
        alert("내용을 입력해주세요.");
        return;
    } const newTodo = {
        id: Date.now(),
        text: input.value
    }
    todoData.push(newTodo);
    render(todoData);
    input.value = "";
    console.log(newTodo.id);
}


function deleteData(id) {
    if (confirm("정말 삭제하시겠습니까?")) {
    todoData = todoData.filter(data => data.id !== id);
    render(todoData);
}};


function updateData(id) {
    const item = todoData.find(data => data.id === id);
    const newText = prompt("수정사항을 입력해주세요.", item.text);
    
    if (newText !== null && newText !== "") {
        item.text = newText;
    }   
    render(todoData);
}

//업데이트(수정) 이어서 진행하기

alert("1");



