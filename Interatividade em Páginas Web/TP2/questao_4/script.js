const paragrafos = document.querySelectorAll("p");

paragrafos.forEach(paragrafo => { paragrafo.classList.add("borda", "texto", "fundo"); });

paragrafos[0].classList.remove("borda", "texto", "fundo");
paragrafos[1].classList.remove("borda");
paragrafos[2].classList.remove("fundo");

paragrafos[1].classList.replace("fundo", "borda");
paragrafos[2].classList.replace("borda", "fundo");