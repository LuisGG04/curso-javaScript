const video = document.getElementById("video")

addEventListener("visibilitychange", (e) => {
    if(document.visibilityState === "visible"){
        console.log("Play")
        video.play()
    } else if (document.visibilityState === "hidden"){
        console.log("Pause")
        video.pause()
    }
})