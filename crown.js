const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4100;
let precio = [726.52	,
    985.43	,
    1305.57	,
    273.85	,
    309.94	,
    (2087600/1.19/dolar)	,
    912.73	,
    309.28	,
    374.37	,
    498.89	,
    568.84	
];


let pesos = [];

for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 0.82) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
} 