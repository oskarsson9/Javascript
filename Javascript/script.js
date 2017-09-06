var newItemCounter = 1;
var ourButton = document.getElementById("btn");
var ourHeadline = document.getElementById("headline");
var listItems = document.getElementById("list").getElementsByTagName("li");
var ourList = document.getElementById("list");

ourList.addEventListener("click", activateItem);

function activateItem(e) {
	if (e.target.nodeName == "LI") {
		ourHeadline.innerHTML = e.target.innerHTML;
	for (i=0; i < e.target.parentNode.children.length; i++) {
		e.target.parentNode.children[i].classList.remove("active");

}
	e.target.classList.add("active");
	}
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
	ourList.innerHTML += "<li>Something new " + newItemCounter + "</li>";
	newItemCounter++;
}