const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4100;
let precio = [ 33.22,
    13.29,
    33.22,
    55.37,
    404.84,
    626.33,
    810.90,
    1177.59,
    1588.57,
    28.42,
    184.58,
    778.07,
    1357.58,
    1620.99,
    2622.41,
    770.33,
    131.18,
    131.22,
    1212.50,
    25.84,
    273.67,
    457.75,
    609.10,
    1030.92      
];
let pesos = [];

for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i]/0.82) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

