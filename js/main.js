const addTaskBtn = document.getElementById('add_task')
const addValue = document.getElementById('add_value')
const addPriority = document.getElementById('add_priority')

const taskList_h = document.getElementById('priority_high')
const taskList_m = document.getElementById('priority_midole')
const taskList_l = document.getElementById('priority_low')

const priolityList = {'high': '高', 'middle': '中', 'low': '低'}

const addTask = (task, priority) => {
  //valueのliを作ってリストに追加
  const listElement = document.createElement('li')
  if(priority == 'high'){
    taskList_h.appendChild(listElement)
  }else if(priority == 'middle'){
    taskList_m.appendChild(listElement)
  }else{
    taskList_l.appendChild(listElement)
  }
  

  //内容
  // const editButton = createAndAddListInnerElement(listElement, 'i', ['bi','bi-pencil','flex-edit'], '')
  createAndAddListInnerElement(listElement, 'div', ['flex-value'], task)
  const priorityJp = priolityList[priority]
  createAndAddListInnerElement(listElement, 'div', ['flex-priority'], priorityJp)
  const deleteButton = createAndAddListInnerElement(listElement, 'i', ['bi','bi-calendar-x','flex-delete'], '')

  deleteButton.addEventListener('click', evt => {
    evt.preventDefault()
    deleteTask(deleteButton)
  })
}

//子要素を作成してli要素に追加する
const createAndAddListInnerElement = (li, ele, classNames, value) => {
  const element = document.createElement(ele)
  classNames.forEach(name => {
    element.classList.add(name)
  });
  element.innerHTML = value
  li.appendChild(element);
  return element
}


//タスクの削除
const deleteTask = (deleteButton) => {
  if( !confirm('削除しますか？') ) return
  const chosenTask = deleteButton.closest('li')
  taskList.removeChild(chosenTask)
}

addTaskBtn.addEventListener('click', evt => {
  evt.preventDefault()
  const task = addValue.value
  const priority = addPriority.value
  if(task.trim() == ''){
    alert('内容が空です')
    return
  }
  addTask(task, priority)
  addValue.value = ''
  addPriority.value = 'low'
})
