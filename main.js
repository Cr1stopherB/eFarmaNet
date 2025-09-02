let listado = [];

function revisar(){
    let texto = document.getElementById("inputText");
    if(texto.value.trim() == ""){
        alert("texto vacio");
    }else{
        actualizar(texto.value);
        texto.value = "";
        texto.focus();
        
    }
}

function actualizar(nombre){
    listado.push(nombre);
    renderizar();
}

function eliminar(i){
    listado.splice(i,1);
    renderizar();
}

function renderizar(){
    let ul = document.getElementById("listado");
    ul.innerHTML = ``;
    for(let i = 0; i < listado.length; i++){
        ul.innerHTML += `<li> ${i+1}. ${listado[i]} <button onclick="eliminar(${i})">Eliminar</button> </li>`;
    }
}