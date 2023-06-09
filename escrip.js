function cargarModelos() {
      var marcaSeleccionada = document.querySelector('input[name="marca"]:checked').value;
      var modelosSelect = document.getElementById('modelo');
      modelosSelect.innerHTML = '';
      
      var modelos = {
        'audi': ['Modelo 1', 'Modelo 2', 'Modelo 3'],
        'mercedes': ['Modelo A', 'Modelo B', 'Modelo C'],
        'porsche': ['Modelo X', 'Modelo Y', 'Modelo Z']
      };
      
      for (var i = 0; i < modelos[marcaSeleccionada].length; i++) {
        var option = document.createElement('option');
        option.value = modelos[marcaSeleccionada][i];
        option.text = modelos[marcaSeleccionada][i];
        modelosSelect.appendChild(option);
      }
    }
    
    function calcularCostoAlquiler() {
      var dias = parseInt(document.getElementById('dias').value);
      var modelo = document.getElementById('modelo').value;
      var precioModelo = obtenerPrecioModelo(modelo);
      var nombre = document.getElementById("nombre").value;
      var costoAlquiler = dias * precioModelo;
      document.getElementById('costo').innerHTML = nombre + ' No te asustes el costo de alquiler es: u$d' + costoAlquiler;
    }
    
    function obtenerPrecioModelo(modelo) {
      var precios = {
        'Modelo 1': 100,
        'Modelo 2': 200,
        'Modelo 3': 300,
        'Modelo A': 4334,
        'Modelo B': 5324,
        'Modelo C': 4432,
        'Modelo X': 1231,
        'Modelo Y': 1231,
        'Modelo Z': 1412
      };
      return precios[modelo] || 0;
    }
    function borrarDatos() {
        document.getElementById("nombre").value = '';
        document.getElementById("mail").value = '';
        document.getElementById("dni").value = '';
        document.getElementById("dias").value = null;
        document.getElementById("costo").innerHTML = null;
      }

      function validarFormulario() {
        var nombre = document.getElementById('nombre').value;
        var dias = document.getElementById('dias').value;
        var marcaSeleccionada = document.querySelector('input[name="marca"]:checked');
        var modeloSeleccionado = document.getElementById('modelo').value;
        
        if (nombre.trim() === '') {
            console.log("hola");
          return false;
        }
        
        if (dias.trim() === '') {
            
            console.log("hola");

          return false;
          
        }
        
        if (!marcaSeleccionada) {
                        console.log("hola");

          return false;
        }
        
        if (modeloSeleccionado === '') {
            console.log("hola");

          return false;
        }
        
        return true;
      }

      function siFormulario() {
        var nombre = document.getElementById('nombre').value;
        var dias = document.getElementById('dias').value;
        var marcaSeleccionada = document.querySelector('input[name="marca"]:checked');
        var modeloSeleccionado = document.getElementById('modelo').value;
      
        if (nombre.trim() === '') {
          alert('Por favor, ingresa tu nombre');
        }
      
        if (dias.trim() === '') {
          alert('Por favor, ingresa la cantidad de días');
        }
      
        if (!marcaSeleccionada) {
          alert('Por favor, selecciona una marca');
        }
      
        if (modeloSeleccionado === '') {
          alert('Por favor, selecciona un modelo');
        }
      }
      

      function llamada() {
        if (!validarFormulario()) {
          siFormulario();
        } else {
          calcularCostoAlquiler();
        }
      }