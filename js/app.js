// ********************************************
// PP FLOW
const serverURL = "https://potato-or-pepsi-server.herokuapp.com"
// const serverURL = "localhost:3000"

// index
function getAllPp() {
  console.log(`${serverURL}/pp`)
  fetch(`${serverURL}/pp`)
    .then((res) => res.json())
    .then(appendPps)
    .catch(console.warn);
}

// reset all
function resetPp(e) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  e.preventDefault();
  fetch(`${serverURL}/pp`, options)
    .then((r) => r.json())
    .then(removePp)
    .catch(console.warn);
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

  console.log("random number generated: ",rnd)
  console.log("Potato or Pepsi? ",rndPp)

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
  ppData.name === "potato" ? newDiv.classList.add("potato") : newDiv.classList.add("pepsi")
  newDiv.classList.add("ppObject")
  ppSection.appendChild(newDiv)   
  console.log("pp added") 
}

function removePp(){
  const ppDivs = document.querySelectorAll('.ppObject')
  while (ppDivs.length > 0) {
    ppDivs[0].parentNode.removeChild(ppDivs[0])
  }
  console.log("pp eradicated")
}

// ********************************************

module.exports = {
    getAllPp,
    submitPp,
    appendPps,
    appendPp,
    resetPp
};
