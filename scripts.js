var taskInput = document.getElementById("taskInput");
var addTaskButton = document.getElementById("addTaskButton");
var taskList = document.getElementById("taskList");

function addTask() {
	var text = taskInput.value.trim();

	if (text === "") {
		return;
	}

	var item = document.createElement("li");
	item.className = "task-item";

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	var taskText = document.createElement("span");
	taskText.className = "task-text";
	taskText.textContent = text;

	item.appendChild(checkbox);
	item.appendChild(taskText);
	taskList.appendChild(item);

	taskInput.value = "";
	taskInput.focus();

	window.scrollTo(0, document.body.scrollHeight);

	checkbox.addEventListener("change", function () {
		if (checkbox.checked) {
			item.classList.add("removing");

			setTimeout(function () {
				item.remove();
			}, 1500);
		}
	});

	taskText.addEventListener("dblclick", function () {
		startEdit(item, taskText);
	});
}

function startEdit(item, taskTextElement) {
	var oldText = taskTextElement.textContent;

	var editInput = document.createElement("input");
	editInput.type = "text";
	editInput.className = "edit-input";
	editInput.value = oldText;

	item.replaceChild(editInput, taskTextElement);
	editInput.focus();
	editInput.select();

	function finishEdit() {
		var newText = editInput.value.trim();
		var finalText = newText === "" ? oldText : newText;

		var newTextElement = document.createElement("span");
		newTextElement.className = "task-text";
		newTextElement.textContent = finalText;

		item.replaceChild(newTextElement, editInput);

		newTextElement.addEventListener("dblclick", function () {
			startEdit(item, newTextElement);
		});
	}

	editInput.addEventListener("blur", finishEdit);
	editInput.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			finishEdit();
		}
	});
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		addTask();
	}
});
