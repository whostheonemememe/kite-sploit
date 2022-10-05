var htmlLoaded = false;

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }

function onDoneLoading() {
    // alert("Hello world!");
    htmlLoaded = true;
}

function startLoadingTextCycle() {
    var screenElement = document.getElementById("loading-screen");
    var textElement = screenElement;

    alert(textElement)

    while (!htmlLoaded && screenElement.style.display != 'none') {
        for (i = 0; i < 3; i++) {
            textElement.innerHTML = "Loading" + ("." * i);
            delay(500);
        }
    }
}

startLoadingTextCycle();