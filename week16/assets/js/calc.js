const hyundaiModels = ["Hyundai Solaris", "Hyundai Sonata", "Hyundai Elantra", "Hyundai Creta", "Hyundai Palisade"];
const kiaModels = ["KIA Picanto", "KIA Rio", "KIA Cerato", "KIA Stinger", "KIA XCeed"];
const mercedesModels = ["Mercedes-Benz CL-Class", "Mercedes-Benz S-Class", "Mercedes-Benz GL-Class", "Mercedes-Benz G-Class", "Mercedes-Benz A-Class"];
const renaultModels = ["Renault Arkana", "Renault Duster", "Renault Kaptur", "Renault Logan", "Renault Sandero"];
const toyotaModels = ["Toyota Camry", "Toyota Corolla", "Toyota Fortuner", "Toyota Land Cruiser", "Toyota Avensis"];

const brand = document.querySelector('#brands');
const model = document.querySelector('#models');
const year = document.querySelector('#years');
const auto_petrol = document.querySelector('#petrol');
const auto_gas = document.querySelector('#gas');
const auto_diesel = document.querySelector('#diesel');
const type_mech = document.querySelector('#mech');
const type_auto = document.querySelector('#automate');
let sum = 0;

function selectBrand(sender) {
    if(sender.options[sender.selectedIndex].value == "none")
        document.querySelector('#models').style.display = true;
    else
        document.querySelector('#models').style.display = false;

    let optionsString = "";
    if(sender.options[sender.selectedIndex].value == "hyundai") {
        for(let model of hyundaiModels)
            optionsString += `<option>${model}</option>`;
    }
    if(sender.options[sender.selectedIndex].value == "kia") {
        for(let model of kiaModels)
            optionsString += `<option>${model}</option>`;
    }
    if(sender.options[sender.selectedIndex].value == "mercedes") {
        for(let model of mercedesModels)
            optionsString += `<option>${model}</option>`;
    }
    if(sender.options[sender.selectedIndex].value == "renault") {
        for(let model of renaultModels)
            optionsString += `<option>${model}</option>`;
    }
    if(sender.options[sender.selectedIndex].value == "toyota") {
        for(let model of toyotaModels)
            optionsString += `<option>${model}</option>`;
    }
    document.querySelector('#models').innerHTML = optionsString;
}
function calc1() {
    sum = parseInt(brand.value) + parseInt(year.value);
    sum += (auto_petrol.checked == true) ? parseInt(auto_petrol.value) : 0;
    sum += (auto_gas.checked == true) ? parseInt(auto_gas.value) : 0;
    sum += (auto_diesel.checked == true) ? parseInt(auto_diesel.value) : 0;
    sum += (type_mech.checked == true) ? parseInt(type_mech.value) : 0;
    sum += (type_auto.checked == true) ? parseInt(type_auto.value) : 0;
    console.log(sum);
    total.innerHTML = sum;
}
function calc() {
    const result = calc1()
    selectBrand(sender)
    return result;
}