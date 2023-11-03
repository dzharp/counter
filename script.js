var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
const numOfLis = document.querySelectorAll("li").length;

function updateLiCount(){
	
	console.log(numOfLis);
	document.getElementById("listCount").textContent = numOfLis;
}

function inputLength(){
	return input.value.length;
}

function addListAfterClick(){
	if (inputLength() > 0){
		createListElement();
		updateLiCount();
	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13){
		createListElement();
		updateLiCount();
	}
}

function doneTask(task){
	if (task.target.tagname === "LI"){
		task.target.classList.toggle("done");
	}
}

function handleUlClick(element){
	doneTask(element);
	deleteListElement(element);
	updateLiCount();
}

function deleteListElement(element){
	if(element.target.className === "delClass"){
		element.target.parentElement.remove();
		updateLiCount();
	}
}

function createListElement(){
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delButton);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.classList.add("delClass");
	delButton.innerHTML = 'x';
	updateLiCount();
}

ul.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);