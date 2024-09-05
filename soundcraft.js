const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4100;
let precio = [(1487500/1.19/dolar),
    536.81,
    (4080000/1.19/dolar),
    956.72,
    882.50,
    (299280/1.19/dolar),
    129.78,
    391.76,
    256.87
    ];

let pesos = [];

for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 0.82) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

