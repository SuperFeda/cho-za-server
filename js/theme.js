addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body")
    if (body.classList.contains(".system")) {
        if (window.matchMedia('(prefers-color-scheme:light)')) {
            body.classList.toggle("light")
        } else if (window.matchMedia('(prefers-color-scheme:dark)')) {
            body.classList.toggle("dark")
        }
    }
})
