document.getElementById("theme-icon").addEventListener('click', function () {


    const red = parseInt(Math.random() * 256);
    const green = parseInt(Math.random() * 256);
    const blue = parseInt(Math.random() * 256);

    if (red <= 255 && green <= 255 && blue <= 255) {
        document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;
    }
    else {
        console.log("matha nosto!");
    }



})