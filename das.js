const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4300;
let precio = [48.58	,
    59.56	,
    68.79	,
    121.80	,
    86.36	,
    116.77	,
    116.77	,
    159.04	,
    159.04	,
    443.30	,
    411.82	,
    411.82	,
    491.86	,
    479.46	,
    479.46	,
    251.90	,
    419.83	,
    453.43	,
    482.54	,
    705.94	,
    750.73	,
    1122.92	,
    935.63	,
    671.60	,
    795.55	,
    869.49	,
    1163.28	,
    1699.04	,
    1713.07	,
    849.52	,
    1077.11	,
    1189.54	,
    1476.51	,
    2077.57	,
    2036.74	,
    2036.74	,
    855.20	,
    1301.48	,
    159.04	,
    159.04	,
    222.19	,
    222.19	,
    371.15	,
    371.15	,
    417.94	,
    417.94	,
    805.26	,  
    73.95	,
    95.54	,
    87.79	,
    929.75	,
    1198.72	,
    941.81	,
    1247.66	,
    1306.13	,
    1543.61	,
    1327.54	,
    82.77	,
     842.71	];

let pesos = [];


for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] /0.7)* dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

