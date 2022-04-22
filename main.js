let button = document.querySelector("#add-btn"),
  owner = document.querySelector("#owner-input"),
  carModel = document.querySelector("#model-input"),
  registration = document.querySelector("#registration-input"),
  entryData = document.querySelector("#entry-input"),
  exitData = document.querySelector("#exit-input");

let localData = JSON.parse(localStorage.getItem("DATA")) ?? [];

button.addEventListener("click", function () {
  let ownerValue = owner.value,
    carModelValue = carModel.value,
    registrationValue = registration.value,
    entryDataValue = entryData.value,
    exitDataValue = exitData.value;

  let registrationRegex = /^[A-Z]{1,2}[0-9]{4}[A-Z]{2}$/,
    entryDataObj = new Date(entryData.value),
    exitDataObj = new Date(exitData.value),
    dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  let err = false,
    smallReg = document.querySelector("#small-reg"),
    smallExit = document.querySelector("#small-exit"),
    smallEntry = document.querySelector("#small-entry");
  if (!registrationValue.match(registrationRegex)) {
    smallReg.innerHTML = "Invalid Regestration Number !";
    err = true;
  } else {
    smallReg.innerHTML = "";
  }
  if (entryDataObj > exitDataObj) {
    smallExit.innerHTML = "Invalid Date !";
    err = true;
  } else if (
    !entryDataValue.match(dateRegex) ||
    !exitDataValue.match(dateRegex)
  ) {
    smallExit.innerHTML = "Invalid Date Format !";
    err = true;
  } else {
    smallExit.innerHTML = "";
  }

  if (!err) {
    let newCar = {
      owner: ownerValue,
      carModel: carModelValue,
      registration: registrationValue,
      entryData: entryDataValue,
      exitData: exitDataValue,
    };

    localData.push(newCar);
    localStorage.setItem("CLIENTSDATA", JSON.stringify(localData));

    owner.value = "";
    carModel.value = "";
    registration.value = "";
    entryData.value = "";
    exitData.value = "";
  }
});
