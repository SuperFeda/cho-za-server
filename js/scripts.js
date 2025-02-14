addEventListener("DOMContentLoaded", () => {
    document.getElementById("lang-btn").addEventListener("click", () => {
        document.getElementById("lang-options").classList.toggle("no-display")
    })

    document.getElementById("currency-btn").addEventListener("click", () => {
        document.getElementById("currency-options").classList.toggle("no-display")
    })

    document.getElementById("theme-btn").addEventListener("click", () => {
        document.getElementById("theme-options").classList.toggle("no-display")
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
