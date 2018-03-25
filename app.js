(function(){
	'use strict';

	// ======================================
	// declarations 
	const taskForm = document.querySelector('#add-task-form');	
	const list = document.querySelector('#task-list');	

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
		if (e.target.parentElement.classList.contains('remove-task'))
			e.target.parentElement.parentElement.remove();

		if (e.target.parentElement.parentElement.classList.contains('remove-task'))
			e.target.parentElement.parentElement.parentElement.remove();
	});

})();
