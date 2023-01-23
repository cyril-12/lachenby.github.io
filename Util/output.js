var r = document.getElementById("response");
function out(text) {
    r.textContent = "";
    for (let i = 0; i < text.length; i++) {
        setTimeout(function timer() {
            r.textContent += text[i];
        }, i * 20);
    }
}