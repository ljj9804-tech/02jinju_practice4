const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

let darkMode = false;

toggleBtn.addEventListener('click', function () {
    if (darkMode === false) {
        alert("다크모드로 변경합니다.");
        body.style.background = "black";
        body.style.color = "white";
     }  else {
        alert("라이트모드로 변경합니다.");
        body.style.background = "white";
        body.style.color = "black";
     }  
        darkMode = !darkMode;
});