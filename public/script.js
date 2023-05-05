const taskform = document.querySelector('#taskform')
const tasklist = document.querySelector('#tasklist')
let id = 0

window.addEventListener('load', () => {
    updateTasks()
})

// form handling
taskform.addEventListener('submit', (event) => {
    event.preventDefault()
    addTask()
})

const addTask = () => {
    id++
    const taskObject = {
        id: id,
        name: taskform.elements.name.value,
        type: taskform.elements.type.value,
        rate: taskform.elements.rate.value,
        time: taskform.elements.time.value,
        client: taskform.elements.client.value
    }
   
    let taskStorage = JSON.parse(localStorage.getItem('tasks'))

    if (taskStorage == null) {
        taskStorage = [taskObject]
    } else {
        taskStorage.push(taskObject)
    }
    
    localStorage.setItem('tasks', JSON.stringify(taskStorage))
    console.log(taskStorage)

    updateTasks()
    taskform.reset()
}


const updateTasks = () => {
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    tasklist.innerHTML = ''

    if (tasks !== null) {
        tasks.forEach((task) => {
            const listItem = document.createElement('li')
            listItem.setAttribute('task-id', task.id)
            listItem.innerHTML = `${task.name}`

            const deleteBtn = document.createElement("button");
            const deleteBtnTxt = document.createTextNode("Delete");
            deleteBtn.appendChild(deleteBtnTxt);

            listItem.appendChild(deleteBtn)
            tasklist.appendChild(listItem)

            deleteBtn.addEventListener('click', () => {
                let taskId = listItem.getAttribute('task-id')
                removeTask(taskId)
                listItem.remove()
            })
        })
    }
}

const removeTask = (taskId) => {
    let tasks = JSON.parse(localStorage.getItem('tasks'))

    let updatedTasks = tasks.filter((task) => {
        return task.id != taskId
    })

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))

    updateTasks()
}

