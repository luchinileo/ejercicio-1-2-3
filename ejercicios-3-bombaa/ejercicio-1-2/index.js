const btn = document.getElementById('btn-enviar');

function enviarInfo() {
    const titulo = document.getElementById('titulo').value;
    const url = document.getElementById('url').value;
    const parrafo = document.getElementById('parrafo').value;
    const tarjetas = document.getElementById('tarjetas');
    var tarjeta = document.createElement("div");
    tarjeta.innerHTML += `<p>Titulo: ${titulo}</p>`;
    tarjeta.innerHTML += `<p>URL Imagen: ${url}</p>`;
    tarjeta.innerHTML += `<p>Parrafo: ${parrafo}</p>`;

    
    let button = crearButton('Ocultar Tarjetas', 'btn-danger');
    
    button.addEventListener('click', ocultarTarjetas);

    
    tarjeta.appendChild(button);
   
    var separador = document.createElement('hr');

    
    tarjetas.appendChild(tarjeta);
    
    tarjetas.appendChild(separador);
}

btn.addEventListener('click', enviarInfo);

function crearButton(texto, tipoBoton){
    var button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add(tipoBoton);
    button.classList.add('mb-3');
    button.innerText = texto;
    return button;
}

function ocultarTarjetas() {
    
    const tarjetas = document.getElementById('tarjetas');
    
    tarjetas.hidden = true;

    const verTarjetas = document.getElementById('vertarjetas');
    verTarjetas.hidden = false;
    let button = '';
    if(!document.getElementById('button-ver-tarjeta')){
        button = crearButton('Ver Tarjetas', 'btn-primary');
        button.id = 'button-ver-tarjeta';
        verTarjetas.appendChild(button);
    }else{
        button =document.getElementById('button-ver-tarjeta');

    }

    button.addEventListener('click', verTarjetasClick);
}

function verTarjetasClick() {
     
     const tarjetas = document.getElementById('tarjetas');
    
    tarjetas.hidden = false;
    const verTarjetas = document.getElementById('vertarjetas');
    verTarjetas.hidden = true;
}

