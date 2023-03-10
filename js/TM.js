const resultado = document.getElementById("resultado");

const formulario = document.getElementById("formulario");

const filtrar = () =>{

    resultado.innerHTML = '';
    
    const texto = formulario.value.toLowerCase();
    for ( let producto of productos ){
        let nombre = producto.nombre.toLowerCase();

        if ( nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <div class="card" style="width: 18rem;" id="resultado">
                <img src=${producto.imagen} class="card" alt="..." width="150px">
                <div class="card-body">
                    <h5 class="card-title"> ${producto.nombre}</h5>
                    <p class="card-title"> </p>
                    <button type="submit" class="btn btn-success"><a
                    href=${producto.link}
                    target="_blank" class="color-link">DESCARGAR Declaracion</a> </button>
                    
                </div>
            </div>
            `
        }

    }
    if ( resultado.innerHTML === '' ){
        resultado.innerHTML = `<h3 class="resultado"> Tasa Municipal no encontrada  </h3>`
    }

}

formulario.addEventListener('keyup', filtrar)
filtrar();