// ********************************************
// PP FLOW
const serverURL = "https://potato-or-pepsi-server.herokuapp.com";
console.log(`Server host: ${serverURL}`);
// const serverURL = "localhost:3000"

// counters
function updateCounter() {
    const pepsiCount = document.getElementsByClassName("pepsi");
    const pepsiCounter = document.getElementById("pepsi-counter");
    const potatoCount = document.getElementsByClassName("potato");
    const potatoCounter = document.getElementById("potato-counter");
    console.log(potatoCount);
    console.log(pepsiCount);
    potatoCount.length > 0
        ? (potatoCounter.textContent = `Potato Count: ${potatoCount.length}`)
        : (potatoCounter.textContent = "");
    pepsiCount.length > 0
        ? (pepsiCounter.textContent = `Pepsi Count: ${pepsiCount.length}`)
        : (pepsiCounter.textContent = "");
}

// index
function getAllPp() {
    fetch(`${serverURL}/pp`)
        .then((res) => res.json())
        .then(appendPps)
        .catch(console.warn);
}

// reset all
function resetPp(e) {
    const options = {
        method: "DELETE",
        body: "",
        headers: {
            "Content-Type": "application/json",
        },
    };

    e.preventDefault();
    fetch(`${serverURL}/pp`, options).then(removePp).catch(console.warn);
}

// create
function submitPp(e) {
    e.preventDefault();

    let rnd = Math.round(Math.random());
    let rndPp = "";

    switch (rnd) {
        case 0:
            rndPp = "potato";
            break;
        case 1:
            rndPp = "pepsi";
            break;
    }

    console.log("Potato or Pepsi? ", rndPp);

    const ppData = {
        name: rndPp,
    };

    const options = {
        method: "POST",
        body: JSON.stringify(ppData),
        headers: {
            "Content-Type": "application/json",
        },
    };

    fetch(`${serverURL}/pp`, options)
        .then((r) => r.json())
        .then(appendPp)
        .catch(console.warn);
}

// helpers
function appendPps(pps) {
    pps.forEach(appendPp);
}

function appendPp(ppData) {
    const newDiv = document.createElement("div");
    const ppSection = document.querySelector(".ppOutput");
    ppData.name === "potato"
        ? newDiv.classList.add("potato")
        : newDiv.classList.add("pepsi");
    newDiv.classList.add("ppObject");
    ppSection.appendChild(newDiv);
    updateCounter();
}

function removePp() {
    let ppDivs = document.querySelectorAll(".ppObject");
    while (ppDivs.length > 0) {
        ppDivs[0].parentNode.removeChild(ppDivs[0]);
        ppDivs = document.querySelectorAll(".ppObject");
    }
    updateCounter()
    console.log("all ppObjects eradicated");
}

// ********************************************

module.exports = {
    getAllPp,
    submitPp,
    appendPps,
    appendPp,
    resetPp,
};
