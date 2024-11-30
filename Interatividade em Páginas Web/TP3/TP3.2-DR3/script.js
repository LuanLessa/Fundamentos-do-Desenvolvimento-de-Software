const img = document.querySelector("img");
img.addEventListener("load", () => {
    const p = document.querySelector("p");
    img.style.border = "1px solid red";
    p.style.display = "block";
});