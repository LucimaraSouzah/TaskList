let inputNewTask = document.querySelector('.newTask');
let buttonAdd = document.querySelector('.confirmTask');
let inputListTask = document.querySelector('.listTask');
let buttonCloseEdit = document.querySelector('.editClose');
let buttonAttTask = document.querySelector('.buttonAtt');
let windowBackg = document.querySelector('.windowBackg');
let windowEdit = document.querySelector('.windowEdit');
let changeTask = document.querySelector('.changeTask');
let textEdit = document.querySelector('.textEdit');
let buttonEdit = document.querySelector('.editTask');
let buttonDelete = document.querySelector('.deleteTask');
let idTaskEdit = document.querySelector('.textEdit');


inputNewTask.addEventListener('keypress', (e)=> {
    if(e.keyCode == 13) {
        let task = {
            name: inputNewTask.value,
            id: generateID(),
        }
        addTask(task);
    }   
});


buttonAdd.addEventListener('click', (e)=>{
    let task = {
        name: inputNewTask.value,
        id: generateID(),
    }
    addTask(task);
});

function generateID() {
    return Math.floor(Math.random() * 3000);
}

function addTask(task) {
    let li = create(task);
    inputListTask.appendChild(li);
    inputNewTask.value = '';
}

function create(task) {
    let li = document.createElement('li');
    li.id = task.id;

    let span = document.createElement('span');
        span.classList.add('textTask');
        span.innerHTML = task.name;

    let div = document.createElement('div');
        div.classList.add('icon');

    let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('editTask');
        buttonEdit.setAttribute('onclick', 'edit('+task.id+')');
        
    let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('deleteTask');
        buttonDelete.setAttribute('onclick', 'del('+task.id+')');

    div.appendChild(buttonEdit);
    div.appendChild(buttonDelete);

    li.appendChild(span);
    li.appendChild(div);

    return li
}

function del(idTask) {
    let confirm = window.confirm('Tem certeza que deseja excluir?');

    if (confirm) {
        let li = document.getElementById('' + idTask + '');
            if(li) {
                inputListTask.removeChild(li);
            } else {
                alert('Elemento HTML não encontrado!')
            } 
    }
}

function edit(idTask) {
    let li = document.getElementById('' + idTask + '');

    if(li){
        textEdit.innerHTML = '#' + idTask;
        changeTask.value = li.innerText;
        backWindow();
    } else {
        alert('Elemento HTML não encontrado!');
    } 

}

buttonCloseEdit.addEventListener('click', (e)=> {
    windowBackg.style.display = "none";
    windowEdit.style.display = "none";
});

function backWindow() {
    windowBackg.style.display = "block";
    windowEdit.style.display = "block";
}

buttonAttTask.addEventListener('click', (e)=> {
    e.preventDefault();

    let idTask = textEdit.innerHTML.replace('#','');

    let task = {
        name: changeTask.value,
        id: idTask,
    }

    let currentTask = document.getElementById(''+idTask+'');

    if (currentTask) {
        let li = create(task);
        inputListTask.replaceChild(li, currentTask);
        
    } else {
        alert('Elemento HTML não encontrado!');
    }    
    windowBackg.style.display = "none";
    windowEdit.style.display = "none";
});


