const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4000;
let precio = [416.04, 416.04, 416.04, 470.67, 1046.40, 521.10, 462.26, 3908.23, 8226.90, 12207.97, 446.86, 378.22, 1947.11, 727.02, 2936.78, 628.96];

let pesos = [];


for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil((precio[i] * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

