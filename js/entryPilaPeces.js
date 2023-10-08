const selectElement = document.getElementById('numPila');

fetch('http://localhost:8082/API/Pila', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'authenticate': localStorage.getItem("authenticate"),
  }
})
  .then(response => response.json())
  .then(data => {
    const pilas = data.mantePila; // Ajusta la propiedad 'pilas' según la estructura de los datos

    pilas.forEach(pila => {
      //solo cargamos las pilas que no esten vacias
      if (pila.cantidad == 0){
        const optionDestination = document.createElement('option');
        optionDestination.value = pila.numPila;
        optionDestination.textContent = pila.numPila;
        optionDestination.setAttribute('pila_id', pila._id);
        optionDestination.setAttribute('cantidad', pila.cantidad);   
        selectElement.appendChild(optionDestination);

      }

    });
  })
  .catch(error => {
    console.error('Error al obtener la pilas:', error);
  });
