const taskform = document.querySelector('#taskform')
const tasklist = document.querySelector('#tasklist')

// form handling
taskform.addEventListener('submit', (event) => {
    event.preventDefault()
    addTask()
})

const addTask = () => {
    name = taskform.elements.name.value
    type = taskform.elements.type.value
    rate = taskform.elements.rate.value
    time = taskform.elements.time.value
    client = taskform.elements.client.value

    const listItem = document.createElement('li')
    listItem.innerHTML = `${name} ${type} ${rate} ${time} ${client}`
    const deleteBtn = document.createElement("button");
    const deleteBtnTxt = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtnTxt);
    listItem.appendChild(deleteBtn)
    tasklist.appendChild(listItem)
    taskform.reset()

    deleteBtn.addEventListener('click', () => {
        listItem.remove()
    })
}