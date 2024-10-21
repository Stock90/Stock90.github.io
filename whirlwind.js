const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4200;
let precio = [119.00	,
743.76	,
1035.31	,
34.50	,
142.02	,
28.69	,
59.50	,
773.50	,
224.90	,
161.83	,
321.29	];

let pesos = [];


for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 1) * dolar) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

