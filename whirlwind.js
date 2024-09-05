const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4100;
let precio = [91.02,
    512.50,
    713.40,
    23.78,
    116.37,
    23.50,
    50.36,
    533.00,
    162.36,
    161.54,
    167.28,
    704.38,
    111.52,
    222.22
];

let pesos = [];


for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 0.82) * dolar) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

