// setData = Establece los datos que se quieren compartir
// getData = Establece los datos que se quieren recibir

const pendingTask = document.getElementById("pending__task");
const finishedTask = document.getElementById("finished-task");

pendingTask.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id)
})

pendingTask.addEventListener("drag", (e) => {
    e.target.classList.add("active")
})

pendingTask.addEventListener("dragend", (e) => {
    e.target.classList.remove("active")
})

finishedTask.addEventListener("dragover", (e) => {
    e.preventDefault()
})

finishedTask.addEventListener("drop", (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData("text"))
    element.classList.remove("active")
    finishedTask.appendChild(pendingTask.removeChild(element))
})



finishedTask.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id)
})

finishedTask.addEventListener("drag", (e) => {
    e.target.classList.add("active")
})

finishedTask.addEventListener("dragend", (e) => {
    e.target.classList.remove("active")
})

pendingTask.addEventListener("dragover", (e) => {
    e.preventDefault()
})

pendingTask.addEventListener("drop", (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData("text"))
    element.classList.remove("active")
    pendingTask.appendChild(finishedTask.removeChild(element))
})

