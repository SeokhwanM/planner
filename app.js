const time = document.getElementById("time");
const day = document.getElementById("day");
const dayName = ["일", "월", "화", "수", "목", "금", "토"]


function getTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    const daynumber = date.getDay();
    day.innerText = `${dayName[daynumber]}요일`;
    time.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}

getTime(); // 처음 시작했을때 00:00:00으로 나오는 문제 해결
setInterval(getTime, 1000);




const toDoForm = document.getElementById("toDoForm");
const toDoInput = document.getElementById("toDoInput");
const toDos = document.getElementById("toDos");
const Done = document.getElementById("Done");



function handleForm(event) {
    event.preventDefault(); // submit해서 페이지 새로고침 되는거 막음
    const Text = toDoInput.value;
    toDoInput.value = ''; // 입력 후 초기화

    const buttoncomplete = document.createElement("button"); // 버튼 제작
    const buttondelete = document.createElement("button");// 버튼 제작
    buttoncomplete.style.color = "green"
    buttondelete.style.color = "red"

    buttoncomplete.innerText = "완료";
    buttondelete.innerText = "삭제";
    const li = document.createElement("li") // 새로운 태그 만듦 li태그
    li.innerText = Text;
    li.appendChild(buttoncomplete);
    li.appendChild(buttondelete);

    buttoncomplete.addEventListener("click", completeToDo);
    buttondelete.addEventListener("click", deleteToDo);
    toDos.appendChild(li); // 부모.appendChild(자식);
};

function deleteToDo(event) {
    event.target.parentElement.remove();
};  // 리스트 삭제 기능 event.target.remove();

function completeToDo(event) {
    if (event.target.innerText == "완료") {
        event.target.parentElement.style.textDecorationLine = "line-through"//부모 요소인 리스트에 줄치기
        event.target.innerText = "취소"
        event.target.style.color = "black"
        Done.appendChild(event.target.parentElement);
    } else {
        event.target.parentElement.style.textDecorationLine = "none"//부모 요소인 리스트에 줄친거 없애기
        event.target.innerText = "완료"
        event.target.style.color = "green"
        toDos.appendChild(event.target.parentElement);
    }

} // 리스트 완료시 부모타겟으로 작대기
toDoForm.addEventListener("submit", handleForm)


const sw = document.getElementById("stopwatch");
let swh = 0;
let swm = 0;
let sws = 0;  
function stopwatch() {
    
    if (sws ==60) {
        sws=0
        swm++;
    }
    if (swm == 60) {
        swm=0
        swh++;
    }
    sw.innerText = `${String(swh).padStart(2, "0")}:${String(swm).padStart(2, "0")}:${String(sws).padStart(2, "0")}`;
    sws++;
    
}

const startb = document.getElementById("startb");

let flag = 0;
let inter;
function stopintb(event) {
    if (flag == 0) {
        stopwatch()
        inter = setInterval(stopwatch,1000)
        flag = 1
    }
    if (event.target.innerText == "시작") {
        event.target.innerText = "정지"

    } else {
        event.target.innerText = "시작"
        clearInterval(inter)
        flag=0
    }
    
}

startb.addEventListener("click", stopintb);



const resetb = document.getElementById("resetb");

function resetClock() {
    swh = 0;
    swm = 0;
    sws = 0; 
    sw.innerText = `${String(swh).padStart(2, "0")}:${String(swm).padStart(2, "0")}:${String(sws).padStart(2, "0")}`;
}
resetb.addEventListener("click",resetClock);
















const tm = document.getElementById("timer");
let tmh = 0;
let tmm = 0;
let tms = 0;

const kor = document.getElementById("kor");
const math = document.getElementById("math");
const eng = document.getElementById("eng");
const sci = document.getElementById("sci");
const starttm = document.getElementById("starttm")
const resettm = document.getElementById("resettm")


function timer() {
    if (tms == 0) {
        tmm--;   
        tms = 60;  
    }
    if (tmm == -1) {
        tmh--;   
        tmm = 59;  
    }
    if (tm.innerText == '00:00:00') {
        clearInterval(inter2)
        alert("the end!!!!")
        
    }else{
        tms--;
    }
    
    tm.innerText = `${String(tmh).padStart(2, "0")}:${String(tmm).padStart(2, "0")}:${String(tms).padStart(2, "0")}`;
}


let flag2 = 0;
let init = '';
let inter2;
function tmintb(event) {
    if (flag2 == 0) {
        timer()
        inter2 = setInterval(timer, 1000);
        flag2 = 1
    }
    if (event.target.innerText == "시작") {
        event.target.innerText = "정지"

    } else {
        event.target.innerText = "시작"
        clearInterval(inter2)
        flag2=0;
    }

}

starttm.addEventListener("click", tmintb);

resettm.addEventListener("click", resettimer);

function resettimer() {
    tm.innerText = init;
}























kor.addEventListener("click",ko)
math.addEventListener("click",ma)
eng.addEventListener("click",en)
sci.addEventListener("click",sc)

function ko() {
    tmh = 1;
    tmm = 20;
    tms = 0;
    tm.innerText = `${String(tmh).padStart(2, "0")}:${String(tmm).padStart(2, "0")}:${String(tms).padStart(2, "0")}`;
    init = tm.innerText;
}

function ma() {
    tmh = 1;
    tmm = 40;
    tms = 0;
    tm.innerText = `${String(tmh).padStart(2, "0")}:${String(tmm).padStart(2, "0")}:${String(tms).padStart(2, "0")}`;
    init = tm.innerText;
}

function en() {
    tmh = 1;
    tmm = 10;
    tms = 0;
    tm.innerText = `${String(tmh).padStart(2, "0")}:${String(tmm).padStart(2, "0")}:${String(tms).padStart(2, "0")}`;
    init = tm.innerText;
}

function sc() {
    tmh = 0;
    tmm = 0;
    tms = 5;
    tm.innerText = `${String(tmh).padStart(2, "0")}:${String(tmm).padStart(2, "0")}:${String(tms).padStart(2, "0")}`;
    init = tm.innerText;
}



















