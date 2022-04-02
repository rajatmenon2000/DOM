function changeStuff() {
    let pgtitlePmt = prompt("Please enter a new page title!", "Interactive JavaScript");
    let headingPmt = prompt("Please enter a new heading!", "Interactive JS Page");
    let paraPmt = prompt("Please enter new text!", "This is an interactive JavaScript webpage.");
    let imageUrlPmt = prompt("Please add new image url!", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png");
    let imageAltPmt = prompt("Please add new image alt!", "JavaScript Logo");

    let pgtitle = document.querySelector("#pgtitle");
    let heading = document.querySelector("#heading");
    let para = document.querySelector("#para");
    let imageUrl = document.getElementById("image").src = imageUrlPmt;
    let imageAlt = document.getElementById("image").alt = imageAltPmt;

    pgtitle.innerHTML = pgtitlePmt;
    heading.innerHTML = headingPmt;
    para.innerHTML = paraPmt;
    imageUrl.innerHTML = imageUrlPmt;
    imageAlt.innerHTML = imageAltPmt;

}