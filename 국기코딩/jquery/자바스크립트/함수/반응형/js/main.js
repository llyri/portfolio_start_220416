let grid = new Isotope("section", { //배치할 요소를 감싸고 있는 부모요소
    itemSelector: "article", //배치할 요소명
    columnWidth: "article", //넓이값을 구할 요소명
    transitionDuration: "0.7s"//화면 재배치시 요소가 움직이는 속도
});

let btns = document.querySelectorAll(".menu li")

for (let el of btns) {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        let sort = e.currentTarget.querySelector("a").getAttribute("href");

        // plugIn
        // grid 안에 저장된 결과를 불러와 재정렬 기능을 연결
        grid.arrange({
            filter: sort
        });

        for (let el of btns) {
            el.classList.remove("on")
        }

        e.currentTarget.classList.add("on");
    })
}