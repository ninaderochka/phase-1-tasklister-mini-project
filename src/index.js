document.addEventListener("DOMContentLoaded", () => {
  // your code here
 document.querySelector('form').addEventListener('submit', (e) => {
e.preventDefault()
handleTask(e.target.add_task.value)

 })

 function handleTask (task) {
  let p = document.createElement('p')
  console.log(p)
  p.textContent = task
  let btn = document.createElement('button')
  btn.addEventListener('click', (handleDelete)
  );

  btn.textContent = 'x'
  p.appendChild(btn)
  function handleDelete (e) {
    e.target.parentNode.remove() 
  }
  let list = document.querySelector('#list').appendChild(p)
  console.log(list)
  console.log(btn)

 }

 sortedTasksArray = existingTasksArray.sort(function(a, b) {
  return b.dataset.priority - a.dataset.priority;
});





} )