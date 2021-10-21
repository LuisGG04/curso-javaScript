const fileInput = document.getElementById("file")
const dropZone = document.getElementById("drop-zone")

dropZone.addEventListener("click", (e) => {
    fileInput.click()
})

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault()
    dropZone.classList.add("drop-zone--active")
})

dropZone.addEventListener("dragleave", (e) => {
    dropZone.classList.remove("drop-zone--active")
})

dropZone.addEventListener("drop", (e) => {
    e.preventDefault()
    fileInput.files = e.dataTransfer.files
    console.log(fileInput.files)
    dropZone.classList.remove("drop-zone--active")
})