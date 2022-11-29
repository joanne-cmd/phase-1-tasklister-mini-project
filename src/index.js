document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", (e)=>{
      e.preventDefault()
      handleToDo(e.target.newTaskDescription.value)
      form.reset()
  } )
});
function handleToDo(task){
 console.log(task)
 let p = document.createElement("p")
 let btn = document.createElement("button") 
 btn.addEventListener("click", handleDelete)
 btn.textContent= "del"
 p.textContent = ` ${task} `
 p.appendChild(btn)
 console.log(p)
 document. querySelector("#tasks").appendChild(p)
}
 function handleDelete(e){
  e.target.parentNode.remove()
 }