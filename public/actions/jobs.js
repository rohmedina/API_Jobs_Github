// PRUEBA FINAL ->
var locacion = document.getElementById("locacion");
var afinidad = document.getElementById("afinidad");

function buscar() {
  $("#datostrabajos").html("");
  let location = `&location=${locacion.value}`;
  let description = `&description=${afinidad.value}`;

  async function proceso() {
    var config = {
      headers: { "Access-Control-Allow-Origin": "*", "Content-type": "application/json" },
    };

    let Jobs = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?${description}${location}`, config);

    Jobs.data.forEach((datos) => {
      $("#datostrabajos").append(
        `<div class="card mb-4">
          <div class="row ">
            <div class="col-md-4 text-center">
              <img src="${datos.company_logo}" class="card-img rounded" alt=" ${datos.company}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title"> ${datos.title} </h3>
                <h5 class="card-text">  ${datos.company} </h5>
                <p class="card-text">Ubicacion: ${datos.location}</p>
                <p class="card-text">Url: ${datos.company_url}</p>
                  <p class="card-text">Horario: ${datos.type}</class=></p>
              </div>
            </div>
          </div>
        </div>
              `
      );
    });
  }
  proceso();
}
