addEventListener("DOMContentLoaded", () => {
    document.getElementById("burger-menu").addEventListener("click", () => {
        document.getElementById("header-navbar").classList.toggle("active")
        document.getElementById("adapt-btns").classList.toggle("active")
    })

    document.getElementById("lang-btn").addEventListener("click", () => {
        document.getElementById("lang-options").classList.toggle("no-display")
    })

    document.getElementById("currency-btn").addEventListener("click", () => {
        document.getElementById("currency-options").classList.toggle("no-display")
    })

    document.getElementById("theme-btn").addEventListener("click", () => {
        document.querySelector("body").classList.toggle("dark")
        document.querySelector("body").classList.toggle("light")
        // localStorage.setItem("theme", "")
    })

    // const d = document.getElementById("currency-options")
    //
    // addEventListener("click", (event) => {
    //     if (!event.target.matches("#currency-options")) {
    //         if (d.classList.contains('no-display')) {
    //             d.classList.remove('no-display');
    //         }
    //     }
    // })
})
