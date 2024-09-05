const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4100;
let precio = [163.45,
    256.21,
    (182750/1.19/dolar),
    (595000/1.19/dolar),
    75.13,
    93.91,
    92.07,
    40.98,
    (1759500/1.19/dolar),
    (3159450/1.19/dolar),
    48.96,
    48.96,
    54.40,
    54.40,
    54.40,
    95.31,
    65.83
];

let pesos = [];

for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] /0.82)* dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}


