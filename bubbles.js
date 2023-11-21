// El model es sencillamente una lista que va a contener strings tal que
// ["peras", "limones", "manzanas",....]
var model = [];

function init(){
    this.model = [];
    view(this.model);
}

// El update consta de dos sencillas acciones, añadir el contenido 
// del input a la lista de 
function update(action){

    if(action == "add")
        model.push(document.getElementById("newbubble").value)
    if(action == "remove")
        model.pop();

    view(this.model);
}

// Cuidado con los nombres de variable repetidos
function view(model){

    // Si no borramos el contenido que ya existe en 
    // en el html añadiremos sobre lo que ya había y no sería correcto
    document.getElementById("bubbleslist").innerHTML = "";

    // Vamos a ir rotando el color de las burbujas, va de 0 a 360
    // incrementamos 20 grados por burbuja
    var hue = 0;

    // Para cada elemento de la lista creamos una etiqueta de html, div,
    // se metemos el texto del elemento y la class para que se vea con el 
    // estilo de css que corresponda
    model.forEach(bubbleText => {
        var bubbleDiv = document.createElement('div');
        bubbleDiv.innerText = bubbleText;
        bubbleDiv.style = "filter: hue-rotate("+hue+"deg)";
        bubbleDiv.className = "bubble";
        // Añadimos el elemento recién creado dentro del placeholder que hemos definido
        // para las burbujas con append, lo que añade elemntos desde el final sin borrar los anteriores
        document.getElementById("bubbleslist").append(bubbleDiv);

        hue = hue + 20;
    })
}