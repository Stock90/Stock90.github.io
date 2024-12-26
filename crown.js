const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4350;
let precio = [	882.21	,
1196.60	,
1585.34	,
332.53	,
364.65	,
497.32	,
1108.31	,
363.86	,
440.44	,
586.92	,
669.23	
];

let pesos = [];

for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 1) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
} 
