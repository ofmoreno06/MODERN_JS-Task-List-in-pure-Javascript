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
		return taskForm['new-task'].value = '';
	}

	// ======================================
	// addTask button
	taskForm['add-task'].addEventListener('click', addTask);

	function addTask(e){
		// create new node <li>newTask <a>close</a></li>
		// list.appendChild(node)
	
		console.log(getNewTaskValue());
		cleanNewTaskValue();
		e.preventDefault();	
	}

})();
