let mode = document.querySelector(".item.far");
mode.addEventListener("click" , e => {
    let tags = document.querySelectorAll(".menu-wrapper nav ul a")
    if (mode.classList.contains("fa-moon")) {
        mode.classList.replace("fa-moon" , "fa-sun")
        document.querySelector("body").classList.add("body-dark-mode");
        tags.forEach(tag => {
            tag.classList.add("menu-dark-mode")
        });
    }else if (mode.classList.contains("fa-sun")) {
        mode.classList.replace("fa-sun" , "fa-moon")
        document.querySelector("body").classList.remove("body-dark-mode");
        tags.forEach(tag => {
            tag.classList.remove("menu-dark-mode")
        });
    }
    
})
let responsiveMode = document.querySelectorAll('.mode');
responsiveMode = Array.from(responsiveMode);
responsiveMode.forEach(btn => {
    btn.addEventListener("click" , e => {
        document.querySelector(".responsive-menu").style.display = "none"
        let tags = document.querySelectorAll(".menu-wrapper nav ul a")
        if (e.target.classList.contains("dark")) {
            document.querySelector(".light-mode").style.display = "inline-block"
            document.querySelector(".dark-mode").style.display = "none"
            mode.classList.replace("fa-moon" , "fa-sun")
            document.querySelector("body").classList.add("body-dark-mode");
            tags.forEach(tag => {
                tag.classList.add("menu-dark-mode")
            });
        } else if (e.target.classList.contains("light")) {
            document.querySelector(".dark-mode").style.display = "inline-block"
            document.querySelector(".light-mode").style.display = "none"
            mode.classList.replace("fa-sun" , "fa-moon")
            document.querySelector("body").classList.remove("body-dark-mode");
            tags.forEach(tag => {
                tag.classList.remove("menu-dark-mode")
            });
        }
    })
})
document.querySelector(".responsive-menu-wrapper li").addEventListener("click" , e => {
    document.querySelector(".responsive-menu").style.display = "flex"
})
document.querySelector(".fa-window-close").addEventListener("click" ,e => {
    
    document.querySelector(".responsive-menu").style.display = "none"
})