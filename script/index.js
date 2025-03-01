document.getElementById("theme-icon").addEventListener('click', function () {
    const red = parseInt(Math.random() * 256);
    const green = parseInt(Math.random() * 256);
    const blue = parseInt(Math.random() * 256);

    if (red <= 255 && green <= 255 && blue <= 255) {
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
})

document.getElementById("clear-history").addEventListener("click", function () {
    const historyContainer = document.getElementById("activity-history");
    historyContainer.innerHTML = '';
})

document.getElementById('date').innerText = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});;


