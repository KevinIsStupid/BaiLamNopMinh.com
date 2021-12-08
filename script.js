let textbox = document.getElementById("textbox");
let vid = document.getElementById("vid");
vid.pause();

function clicked() {
    if (textbox.value == "256") {
        vid.style.visibility = "visible";
        vid.play();
    } else {
        alert("Sai rồi, làm lại đi!")
    }
}