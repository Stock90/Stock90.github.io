const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4150;
let precio = [93.29	,
525.22	,
731.09	,
24.38	,
117.81	,
23.81	,
51.61	,
546.22	,
166.39	,
165.56	,
171.43	,
721.86	,
114.29	,
227.74	
];

let pesos = [];


for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 1) * dolar) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

