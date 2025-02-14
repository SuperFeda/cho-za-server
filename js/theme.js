addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body")
    if (body.classList.contains(".system")) {
        if (window.matchMedia('(prefers-color-scheme:light)').matches) {
            body.classList.toggle("light")
        } else if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
            body.classList.toggle("dark")
        }
    }
})

function lightTheme() {
    let body = document.querySelector('body')
    body.classList.remove("system")
    if (body.classList.contains("dark")) {
        body.classList.remove("dark")
        body.classList.toggle("light")
    }
}
function darkTheme() {
    let body = document.querySelector('body')
    body.classList.remove("system")
    if (body.classList.contains("light")) {
        body.classList.remove("light")
        body.classList.toggle("dark")
    }
}

function systemTheme() {
    let body = document.querySelector('body')
    body.classList.toggle("system")
    body.classList.remove("dark")
    body.classList.remove("light")
    if (window.matchMedia('(prefers-color-scheme:light)').matches) {
        body.classList.toggle("light")
    } else if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
        body.classList.toggle("dark")
    }
}
