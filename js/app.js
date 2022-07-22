// ********************************************
// PP FLOW
const serverURL = "https://potato-or-pepsi-server.herokuapp.com"

// index
function getAllPp() {
  fetch(`${serverURL}/pp`)
    .then((r) => r.json())
    .then(appendPps)
    .catch(console.warn); // ??
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

  console.log(rnd)
  console.log(rndPp)
  const ppData = {
    name: rndPp
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
  const ppSection = document.querySelector(".ppOutput")
  console.log("appending...",ppData.name)
  switch (ppData.name) {
    case "potato":
        newDiv.classList.add("potato")
      break;
    case "pepsi":
        newDiv.classList.add("pepsi")
      break;
  }
  newDiv.classList.add("potato")
  ppSection.appendChild(newDiv)    
}

// ********************************************

module.exports = {
    getAllPp,
    submitPp,
    appendPps,
    appendPp
};
