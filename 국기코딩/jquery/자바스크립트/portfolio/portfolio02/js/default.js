const items = document.querySelectorAll(".section");
const aside = document.querySelector("aside");
const close = document.querySelector(".btn_close");

function show() {
    this.style.border = "1px solid #444"
    this.style.boxShadow = "-5px -5px 20px rgba(0,0,0,0.2)"
}

function hide() {
    this.style.border = "none"
    this.style.boxShadow = "none"
}

function effect() {
    let tit = this.querySelector("h2").innerText;
    let txt = this.querySelector("p").innerText;
    let imgSrc = this.querySelector("img").getAttribute("src");
    console.log(tit, txt, imgSrc)
    0
    aside.querySelector("h2").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("img").setAttribute("src", imgSrc);

    aside.classList.add("on")
}

function btnClose() {
    aside.classList.remove("on");
}

for (let el of items) {
    el.addEventListener("mouseover", show);
    el.addEventListener("mouseout", hide);
    el.addEventListener("click", effect);
    close.addEventListener("click", btnClose)
}


