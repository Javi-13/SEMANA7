<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulador-Credito BP</title>
    <link rel="stylesheet" href="public/Css/styles.css">    
</head>
<body>
    <div class="containerBP">
        <h3>Ingresa el monto a invertir</h3>
        <input type="text" role="textbox" placeholder="$0,00">
        <span id="spn-primer" role="text">Podrás invertir entre $ 500 y $ 100,000,000</span>
        <h5 role="text" aria-hidden="false">Selecciona el tipo de plazo</h5>
        <div class="botones">
            <button id="btn-meses">Meses</button>
            <button id="btn-dias">Dias</button>
        </div>

        <div class="opciones-invertir" id="opciones-meses" style="display: none;">
            <button class="btn_opciones">12</button>
            <button class="btn_opciones">9</button>
            <button class="btn_opciones">6</button>
            <button class="btn_opciones" id="otros-meses">Otros plazo</button>
        </div>

        <div class="opciones-invertir" id="opciones-dias" style="display: none;">
            <button class="btn_opciones">91</button>
            <button class="btn_opciones">61</button>
            <button class="btn_opciones">31</button>
            <button class="btn_opciones" id="otros-dias">Otros plazo</button>
        </div>
        <div id="input-plazo" style="display: none;">
            <label for="plazo-input">Ingresa el numero de meses/dias: </label>
            <input type="number" id="plazo-input">
        </div>

        <span id="respuestas"></span>
    
        <div class="inversion">
            <button class="btn-invertir">Invertir ahora</button>
        </div>
    </div>
</body>
<script src="public/Js/script.js"></script>
</html>