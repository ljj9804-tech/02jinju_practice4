const input = document.getElementById("taskInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

btn.addEventListener('click', function () {
    const todo = input.value;
    if (todo === "") {
        alert("할 일을 입력해주세요.");
        return;
    }
    //    alert("1");
    const li = document.createElement('li');
    li.textContent = todo;

    const btn = document.createElement('button');
    btn.textContent = '삭제';

    btn.addEventListener('click', function () {
        this.parentElement.remove();
    });

    li.appendChild(btn);
    list.appendChild(li);
    
    input.value = "";
});


