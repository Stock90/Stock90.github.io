const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4300;
let precio = [8902.52	,
    5092.43	,
    5609.40	,
    2040.33	,
    270.04	,
    2545.35,
    139.66,
    6282.07,
    36.24	,
    19.80,
    35.42,
    681.49	,
    822.30,
    1016.02	,
    90.17 ,
    102.79,
    161.51	,
    88.99,
    188.75,
    1175.48	,
    242.33	,
    242.33	,
    1228.45	,
    929.43	
];

let pesos = [];

for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 0.82) * dolar * 1.19) /100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

