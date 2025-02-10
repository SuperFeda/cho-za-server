addEventListener("DOMContentLoaded", () => {
    addEventListener("mousemove", (e) => {
        const divRef = document.getElementById('card-one-sl');

        const rect = divRef.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.style.setProperty("--mouse-x", `${x}px`);
        divRef.style.setProperty("--mouse-y", `${y}px`);
    })
    addEventListener("mousemove", (e) => {
        const divRef = document.getElementById('card-two-sl');

        const rect = divRef.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.style.setProperty("--mouse-x", `${x}px`);
        divRef.style.setProperty("--mouse-y", `${y}px`);
    })
    addEventListener("mousemove", (e) => {
        const divRef = document.getElementById('card-three-sl');

        const rect = divRef.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.style.setProperty("--mouse-x", `${x}px`);
        divRef.style.setProperty("--mouse-y", `${y}px`);
    })
    addEventListener("mousemove", (e) => {
        const divRef = document.getElementById('card-four-sl');

        const rect = divRef.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.style.setProperty("--mouse-x", `${x}px`);
        divRef.style.setProperty("--mouse-y", `${y}px`);
    })
})
