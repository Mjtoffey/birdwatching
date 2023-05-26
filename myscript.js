let button = document.getElementById("btn");
let color = document.getElementsByClassName("color");
button.addEventListener('click', () => {
    if (button.textContent === 'Blue') {
        button.textContent = "Green";
        button.style.backgroundColor = "rgba(0,255,0)";

        for (let i = 0; i < color.length; i++) {
            color[i].style.backgroundColor = "rgba(0,0,255)";
          }
    }
    else {
        button.textContent = 'Blue';
        button.style.backgroundColor = "rgba(0,0,255)";
        for (let i = 0; i < color.length; i++) {
            color[i].style.backgroundColor = "rgba(0,255,0,0.5)";
        }
    }
})