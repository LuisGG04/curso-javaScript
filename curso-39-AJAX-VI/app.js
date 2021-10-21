const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", () => {
    fetch("dog.jpg")
    .then(res => res.blob())
    .then(img => {
        document.getElementById("img").src = URL.createObjectURL(img)
    })
})

button2.addEventListener("click", () => {
    fetch("halo_insider.pdf")
    .then(res => res.blob())
    .then(pdf => {
        document.getElementById("link").href = URL.createObjectURL(pdf)
    })
})