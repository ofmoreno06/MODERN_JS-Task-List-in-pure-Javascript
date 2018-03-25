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
	// addTask button
	taskForm['add-task'].addEventListener('click', addTask);

	function addTask(e){
		list.appendChild(createTaskElement(getNewTaskValue()));	
		cleanNewTaskValue();
		e.preventDefault();	
	}

	function createTaskElement(task){
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(task));
		return li;
	}

})();
