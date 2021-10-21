const permissions = document.getElementById("permissions")

permissions.addEventListener("click", () => {
    if(Notification.permission !== "granted"){
        getPermissions()
    } else{
        notify()
    }
})

const getPermissions = () => {
    Notification.requestPermission()
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const notify = () => {
    const options = {
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quod iusto quia, molestiae ipsa nobis voluptatum?",
        icon: "world.png",
        data: "Extra data"
    }
    const notification = new Notification("Hello World", options)

    console.log(notification.data)
}