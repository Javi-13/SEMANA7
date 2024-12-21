document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-meses').addEventListener('click', function() {

        document.getElementById('opciones-meses').style.display = 'flex';
        document.getElementById('opciones-dias').style.display = 'none';

        document.getElementById('respuestas').innerHTML = "Elige el plazo en meses de tu inversión";

        document.getElementById('btn-meses').classList.add('selected');
        document.getElementById('btn-dias').classList.remove('selected');

        // Ocultar input de plazo personalizado
        document.getElementById('input-plazo').style.display = 'none';
    });

    document.getElementById('btn-dias').addEventListener('click', function() {
        document.getElementById('opciones-dias').style.display = 'flex';
        document.getElementById('opciones-meses').style.display = 'none';

        document.getElementById('respuestas').innerHTML = "Elige el plazo en días de tu inversión";
        document.getElementById('btn-dias').classList.add('selected');
        document.getElementById('btn-meses').classList.remove('selected');

        // Ocultar input de plazo personalizado
        document.getElementById('input-plazo').style.display = 'none';
    });

    // Selección de los botones de plazo (6, 9, 12 meses, 31, 61, etc. días)
    document.querySelectorAll('.btn_opciones').forEach(button => {
        button.addEventListener('click', function() {
            // Resaltar el botón seleccionado
            button.classList.toggle('selected');

            // Obtener el valor del plazo seleccionado
            let plazo = parseInt(button.textContent);

            if (button.id === "otros-meses" || button.id === "otros-dias") {
                // Mostrar el input para que el usuario ingrese el número de meses/días
                document.getElementById('input-plazo').style.display = 'block';
                return;
            }

            // Obtener el monto del input y convertirlo a un número
            let montoStr = document.querySelector('input[type="text"]').value.replace(/[^0-9.]/g, '');
            let monto = parseFloat(montoStr);

            if (isNaN(monto) || monto <= 0) {
                document.getElementById('respuestas').innerHTML = "<p>Por favor, ingresa un monto válido.</p>";
                return;
            }

            let interes = 0;
            let mensajePlazo = '';
            let montoFinal = 0;

            // Calcular monto final según el tipo de plazo (Meses o Días)
            if (document.getElementById('btn-meses').classList.contains('selected')) {
                // Intereses para los meses
                switch (plazo) {
                    case 6:
                        interes = 0.063; 
                        break;
                    case 9:
                        interes = 0.067; 
                        break;
                    case 12:
                        interes = 0.070; 
                        break;
                    default:
                        interes = 0.063; 
                        break;
                }
                mensajePlazo = `En ${plazo} meses recibirás:`;
            } else if (document.getElementById('btn-dias').classList.contains('selected')) {
                // Intereses para los días
                switch (plazo) {
                    case 31:
                        interes = 0.0455; 
                        break;
                    case 61:
                        interes = 0.0465; 
                        break;
                    case 91:
                        interes = 0.0475; 
                        break;
                    default:
                        interes = 0.0455; 
                        break;
                }
                mensajePlazo = `En ${plazo} días recibirás:`;
            }

            // Calcular el monto final a recibir
            montoFinal = monto * (1 + interes);

            // Mostrar los resultados en el span #respuestas
            document.getElementById('respuestas').innerHTML = `
                <p>${mensajePlazo} $${montoFinal.toFixed(2)}</p>
                <p>Con el interés de ${interes * 100}%</p>
            `;
        });
    });

    // Si el usuario escribe un plazo en el campo de entrada personalizado
    document.getElementById('plazo-input').addEventListener('input', function() {
        let inputValue = parseInt(this.value);
        if (isNaN(inputValue) || inputValue <= 0) return;

        // Llamar a la función que calcule el resultado con el valor ingresado
        let plazo = inputValue;
        let montoStr = document.querySelector('input[type="text"]').value.replace(/[^0-9.]/g, '');
        let monto = parseFloat(montoStr);

        if (isNaN(monto) || monto <= 0) {
            document.getElementById('respuestas').innerHTML = "<p>Por favor, ingresa un monto válido.</p>";
            return;
        }

        let interes = 0;
        let mensajePlazo = '';
        let montoFinal = 0;

        if (document.getElementById('btn-meses').classList.contains('selected')) {
            interes = 0.063; // Por ejemplo para meses
            mensajePlazo = `En ${plazo} meses recibirás:`;
        } else if (document.getElementById('btn-dias').classList.contains('selected')) {
            interes = 0.0455; // Por ejemplo para días
            mensajePlazo = `En ${plazo} días recibirás:`;
        }

        // Calcular el monto final a recibir
        montoFinal = monto * (1 + interes);

        // Mostrar los resultados en el span #respuestas
        document.getElementById('respuestas').innerHTML = `
            <p>${mensajePlazo} $${montoFinal.toFixed(2)}</p>
            <p>Con el interés de ${interes * 100}%</p>
        `;
    });

    // Validación de solo números en el input
    document.querySelector('input[type="text"]').addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9.]/g, ''); 
    });
});
