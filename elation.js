const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4000;
let precio = [40.34, 16.14, 27.79, 40.34, 67.24, 491.59, 760.54, 984.67, 1429.94, 1938.05, 23.73, 224.13, 922.35, 1661.18, 1977.60, , 988.80, , , 174.03, 174.03, 1479.24, , 555.84, 739.62, 1627.17
];
let pesos = [];

for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i]) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

