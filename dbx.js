const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4150;
let precio = [198.46	,
311.11	,
43.54	,
141.74	,
91.22	,
114.04	,
111.80	,
49.75	,
419.16	,
752.66	,
59.45	,
59.45	,
66.05	,
66.05	,
66.05	,
115.74	,
79.94	
];

let pesos = [];

for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] /1)* dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}


