(function(){
	'use strict';

	// ======================================
	// declarations 
	
	const taskForm = document.querySelector('#add-task-form');	
	const list = document.querySelector('#task-list');	
	const tasks = getTasks();


	// ======================================
	// setup app
	
	tasks.forEach(task => {
		list.appendChild(createTaskElement(task));	
	});
	

	// ======================================
	// newTask field
	
	function getNewTaskValue(){
		return taskForm['new-task'].value;
	}

	function cleanNewTaskValue(){
		taskForm['new-task'].value = '';
	}


	// ======================================
	// addTask functionality

	taskForm['add-task'].addEventListener('click', addTask);

	function addTask(e){
		list.appendChild(createTaskElement(getNewTaskValue()));	
		tasks.push(getNewTaskValue());
		saveTasks(tasks);
		cleanNewTaskValue();
		e.preventDefault();	
	}

	function createTaskElement(task){
		const li = document.createElement('li');
		li.classList.add('list-group-item');
		li.appendChild(document.createTextNode(task));
		
		const closeBtn = li.appendChild(document.createElement('a'));
		closeBtn.classList.add('remove-task');
		closeBtn.classList.add('float-sm-right');
		closeBtn.innerHTML = '<i class="fas fa-times" style="cursor: pointer"></i>';	

		return li;
	}


	// ======================================
	// remove task functionality:
	// - use 'Event Delegation', listening all events inside list and take action only when close icon is clicked.
	
	list.addEventListener('click', e => {
		// click in svg
		if (e.target.parentElement.classList.contains('remove-task')){
			removeTask(e.target.parentElement.parentElement);
		}

		// click in path of svg
		if (e.target.parentElement.parentElement.classList.contains('remove-task')){
			removeTask(e.target.parentElement.parentElement.parentElement);
		}
	});

	function removeTask(li){
		li.remove();
		tasks.splice(tasks.findIndex(task => task === li.textContent), 1);
		saveTasks(tasks);
	}
	

	// ======================================
	// storage functionality
	
	function getTasks(){
		if (localStorage.getItem('tasks'))
			return JSON.parse(localStorage.getItem('tasks'));
		else {
			saveTasks([]);	
			return JSON.parse(localStorage.getItem('tasks'));
		}
	}	

	function saveTasks(tasks){
		localStorage.setItem('tasks', JSON.stringify(tasks));	
	}


})();
