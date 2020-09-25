let forma = document.getElementById('todoForma');
let addInput = document.getElementById('addInput');
let todoList = document.getElementById('main_part');
let todoItems = document.querySelectorAll('.todoItem');

main();

function main(){
	forma.addEventListener('submit', addTodoItem);	
	todoItems.forEach(item => bindEvent(item))
}

function addTodoItem(event){
	event.preventDefault();

	if (addInput.value == '') {
		alert('Необходимо ввести название задачи!');
	}
	const Item = createTodoItem(addInput.value);
	
	todoList.append(Item);
	addInput.value = '';
}

function createTodoItem(label){
	const checkbox = document.createElement('input');
	checkbox.className = 'checkbox';
	checkbox.type = 'checkbox';

	const title = document.createElement('label');
	title.className = 'label';
	title.innerText = label;

	const textfield = document.createElement('input');
	textfield.className = 'textfield';
	textfield.type = 'text';

	// const editInput = document.createElement('button');
	// editInput.className = 'edit';
	// editInput.innerText = 'Изменить';

	const deleteButton = document.createElement('button');
	deleteButton.className = 'delete';
	deleteButton.innerText = 'Удалить';

	const listItem = document.createElement('ul');
	listItem.className = 'todoItem';
	listItem.append(checkbox);
	listItem.append(title);
	listItem.append(textfield);
	// listItem.append(editInput);
	listItem.append(deleteButton);

	bindEvent(listItem);

	return listItem;

}

function bindEvent(todoItem){
	const checkbox = todoItem.querySelector('.checkbox');
	const editInput = todoItem.querySelector('.edit');
	const deleteButton = todoItem.querySelector('.delete');

	checkbox.addEventListener('change', toggleTodoItem);
	// editInput.addEventListener('click', editTodoItem);
	deleteButton.addEventListener('click', deleteTodoItem);

}

function toggleTodoItem(){
	const listItem = this.parentNode;
	listItem.classList.toggle('completed');
}

// function editTodoItem(){
// 	const listItem = this.parentNode;
//     const title = listItem.querySelector('.label');
// 	const textfield = listItem.querySelector('.textfield');
// 	const isEditing = listItem.classList.contains('editing');

// 	if (isEditing) {
// 		title.innerText = editInput.value;
// 		this.innerText = 'Изменить';
// 	} else {
// 		editInput.value = title.innerText;
// 		this.innerText = 'Сохранить';
// 	}

// 	listItem.classList.toggle('editing');
// }

function deleteTodoItem(){
	const listItem = this.parentNode;
	todoList.removeChild(listItem);
}
