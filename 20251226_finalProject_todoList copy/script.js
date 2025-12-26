
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const listContainer = document.getElementById('taskList');

let todoData = JSON.parse(localStorage.getItem('myTodos')) || [];

render(todoData)

function render(todoData) {
	listContainer.innerHTML = "";
	todoData.forEach(function (todo) {
		listContainer.innerHTML += `
    <li>
	  <span>${todo.text}</span>
	  <div>
		<button class="edit-btn" onclick="updateTodo(${todo.id})">
		  수정
		</button>
		<button class="del-btn" onclick="deleteTodo(${todo.id})">
		  삭제
		</button>
	  </div>
	</li>
  `
	})
}


function addTodo() {

	if (input.value === "") {
		alert("내용을 필수로 입력해주세요.");
		return;
	}


	const newTodo = {

		id: Date.now(),
		text: input.value
	}


	todoData.push(newTodo);


	save();
	render(todoData);
	input.value = "";

}
addBtn.addEventListener('click', addTodo)


function updateTodo(id) {
	const item = todoData.find(item => item.id === id);
	const newText = prompt("내용을 수정하세요 : ", item.text);

	if (newText !== null && newText.trim() !== "")
		item.text = newText;
	save();
	render(todoData);

}


function deleteTodo(id) {
	if (confirm("정말 삭제하시겠습니까?")) {
		todoData = todoData.filter(item => item.id !== id);


		save();

		render(todoData);
	}
}

function save() {
	localStorage.setItem('myTodos', JSON.stringify(todoData));
}




const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener('click', function () {
	const keyword = searchBox.value;

	const filteredData = todoData.filter(item => {
		return item.text.includes(keyword);
	});
	
	render(filteredData);
});




// alert("1");


