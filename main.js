window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks')

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // stops the form from refreshing the page since forms refresh pages by default
        
        const task = input.value;

        if (!task) { // if the input has no value/ no task
            alert('Please add a task.')
            return;
        }
        const task_el = document.createElement('div'); // creates a div
        task_el.classList.add('task');  // adds a class of task to that div

        const task_content_el = document.createElement('div'); // creates div
        task_content_el.classList.add('content'); // adds class of content to that div

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');

        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);


        const task_actions = document.createElement('div');
        task_actions.classList.add('actions');

        const task_edit_el = document.createElement('button'); // creates an edit button
        task_edit_el.classList.add('edit'); // adding the class 'edit' to the task_edit_el button
        task_edit_el.innerHTML = 'Edit';

        const task_delete_el = document.createElement('button'); // creates a delete button
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = 'Delete';

        task_actions.appendChild(task_edit_el);
        task_actions.appendChild(task_delete_el);

        task_el.appendChild(task_actions);

        list_el.appendChild(task_el);

        input.value = '';

    })
})