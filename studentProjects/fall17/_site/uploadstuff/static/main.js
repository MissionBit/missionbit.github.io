if (window.location.pathname == "/upload") {
    window.history.replaceState({}, "Home", "/")
}

const refresh = () => {
    const itemBoxes = document.getElementById("item-boxes");
    fetch("/viewList", {
        credentials: 'include'
    })
    .then(res => res.text())
    .then(text => {
        itemBoxes.innerHTML = text;
    });
}

const start = () => {
    setInterval(refresh, 750);
}

window.onload = start;