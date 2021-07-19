let winBtn = document.getElementsByClassName("start")[0]
let startmenu = document.getElementsByClassName("menuBar-wrapper")[0]
let fileBtn = document.getElementsByClassName("file")[0]
let fileExplorer = document.getElementsByClassName("file-wrapper")[0]
let togglerDark = document.getElementsByClassName("toggler")[0]
let toggler = document.getElementsByClassName("togglerLight")[0]

let body = document.body

winBtn.addEventListener("click", () => {

    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-655px"
    } else {
        startmenu.style.bottom = "50px"
    }
})


fileBtn.addEventListener("click", () => {

    if (fileExplorer.style.bottom == "50px") {
        fileExplorer.style.bottom = "-655px"
    } else {
        fileExplorer.style.bottom = "50px"
    }
})


togglerDark.addEventListener("click", () => {

    document.body.style.backgroundImage = "var(--darkBgImg)"
    document.getElementsByClassName("menuBar")[0].style.backgroundColor = "#171717eb"
    document.getElementsByClassName("pinnedText")[0].style.color = "white"
    document.getElementsByClassName("recommendedText")[0].style.color = "white"
    document.getElementsByClassName("allAppsText")[0].style.color = "white"
    document.getElementsByClassName("allAppsText")[1].style.color = "white"
    document.getElementsByClassName("taskbar")[0].style.backgroundColor = "#1b2842"
    document.getElementsByClassName("file-explorer")[0].style.backgroundImage = "url(/images/blackFileEx.PNG)"
    document.getElementsByClassName("timebarImg")[0].src = "/images/taskbarrightDark.PNG"
})


toggler.addEventListener("click", () => {

    document.body.style.backgroundImage = "var(--lightBgImg)"
    document.getElementsByClassName("menuBar")[0].style.backgroundColor = "white"
    document.getElementsByClassName("pinnedText")[0].style.color = "var(--darkFont)"
    document.getElementsByClassName("recommendedText")[0].style.color = "var(--darkFont)"
    document.getElementsByClassName("allAppsText")[0].style.color = "var(--darkFont)"
    document.getElementsByClassName("allAppsText")[1].style.color = "var(--darkFont)"
    document.getElementsByClassName("taskbar")[0].style.backgroundColor = "var(--lightBg)"
    document.getElementsByClassName("file-explorer")[0].style.backgroundImage = "url(/images/fileEx1.jpg)"
    document.getElementsByClassName("timebarImg")[0].src = "/images/taskbarright.PNG"

})