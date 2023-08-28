document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  let toDoList = document.getElementById("tasks")
  let newToDo = document.getElementById('new-task-description')
 

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let addTasks = document.createElement('li')
    toDoList.appendChild(addTasks)
    addTasks.textContent = newToDo.value
    e.target.reset()
    btn = document.createElement('button')
    btn.textContent = " Finished Task"
    addTasks.appendChild(btn)
    btn.addEventListener('click', (e) => {
      e.target.parentNode.remove()
     
    })
  })  
})
