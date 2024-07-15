const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4000;
let precio = [291.12, 163.45, 256.21, 482.74, 40.34, 131.16, 75.13, 93.91, 40.98, 384.43, 93.91, 820.21, 48.96, 48.96, 54.40, 54.40, 54.40, 95.31, 65.83
];

let pesos = [];

for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 0.82) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}


