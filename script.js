const addButton = document.getElementById("add-button");
const vehicleList = document.getElementById("vehicle-list");
const totalWeightSpan = document.getElementById("total-weight");

let totalWeight = 0;

addButton.addEventListener("click", function() {
    const vehicleType = document.getElementById("vehicle-type").value;
    const vehicleWeight = parseFloat(document.getElementById("vehicle-weight").value);

    if (vehicleType.trim() === "" || isNaN(vehicleWeight) || vehicleWeight <= 0) {
        alert("Please enter a valid vehicle type and weight.");
        return;
    }

    const vehicleItem = document.createElement("div");
    vehicleItem.className = "vehicle-item";
    vehicleItem.textContent = `${vehicleType}: ${vehicleWeight} kg`;

    vehicleList.appendChild(vehicleItem);

    totalWeight += vehicleWeight;
    totalWeightSpan.textContent = `${totalWeight.toFixed(2)} kg`;

    document.getElementById("vehicle-type").value = "";
    document.getElementById("vehicle-weight").value = "";
});
