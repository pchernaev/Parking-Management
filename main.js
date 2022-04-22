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
});
