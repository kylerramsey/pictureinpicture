const videoEle = document.getElementById("video");
const button = document.getElementById("button");

// User Select media stream, pass to video, play

const selectMediaStream = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEle.srcObject = mediaStream;

        videoEle.onloadedmetadata = () => {
            videoEle.play();
        };
    } catch (error) {
        console.log(error);
    }
};

button.addEventListener("click", async () => {
    button.disabled = true
    // start picture in picture
    await videoEle.requestPictureInPicture();
    button.disabled = false
});

selectMediaStream();
