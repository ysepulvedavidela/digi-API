fetch("https://digimon-api.vercel.app/api/digimon/")
    .then(info => info.json())
    .then(lista => {
        for (i in lista) {
            $('#digimonList').append(`<option>${lista[i].name}</option>`)
            $('#carrusel').append(`<div class="carousel-item text-center">
                    <img src="${lista[i].img}" class="d-block w-100" alt="...">
                    <h4 class="text-capitalize text-black">${lista[i].name}</h4>
                </div>`)
        }
    })

let form = document.getElementById("formDigimon");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let digimon = ''
    if ($('#nameDigimon').val() != '') {
        digimon = $('#nameDigimon').val()
    } else {
        digimon = $('#digimonList').val()
    }
    fetch("https://digimon-api.vercel.app/api/digimon/name/" + digimon)
        .then(digimon => digimon.json())
        .then(data => {
            console.log(data[0].name)
            const cargarDigimon = (info) => {
                document.querySelector("#showDigimon").innerHTML =
                    `
            <div class="card m-auto w-75" style="width: 18rem;">
                <img src="${info[0].img}" class="card-img-top" alt="digimon">
                <div class="card-body row">
                    <h5 class="card-title text-center fs-2 text-capitalize">${info[0].name}</h5>
                    <hr>
                    <p class="card-text text-center fs-3 text-capitalize"><strong>Level: </strong> ${info[0].level}</p>
                </div>
            </div>
            `
            }
            cargarDigimon(data)
})
})