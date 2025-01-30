const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4250;
let precio = [105.56,
              137.09,
              254.37,
    354.91,
    983.99,
    947.43,
    527.43
    ];

let pesos = [];

for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 0.82) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
    
}

