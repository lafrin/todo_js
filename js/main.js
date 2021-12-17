const addTaskBtn = document.getElementById('add_task')
const addValue = document.getElementById('add_value')
const taskList = document.getElementById('task_list')

const addTask = (task) => {
  //valueのliを作ってリストに追加
  const newItem = document.createElement('li')
  const showItem = taskList.appendChild(newItem)
  showItem.innerHTML = task;

  //liに削除ボタンを追加
  const deleteBtn = document.createElement('button')
  deleteBtn.innerHTML = '削除'
  newItem.appendChild(deleteBtn)

  deleteBtn.addEventListener('click', evt => {
    evt.preventDefault()
    deleteTask(deleteBtn)
  })
}

const deleteTask = (deleteBtn) => {
  const chosenTask = deleteBtn.closest('li')
  taskList.removeChild(chosenTask)
}

addTaskBtn.addEventListener('click', evt => {
  evt.preventDefault()
  const task = addValue.value
  if(task.trim() == '') return
  addTask(task)
  console.log(task)
  addValue.value = ''
})
