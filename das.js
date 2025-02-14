const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4100;
let precio = [48.10	,
59.00	,
68.05	,
120.62	,
115.64	,
157.49	,
157.49	,
438.98	,
285.05	,
475.09	,
498.17	,
530.14	,
775.58	,
824.79	,
1233.72	,
1058.78	,
665.09	,
787.83	,
861.05	,
1152.00	,
1682.54	,
1696.44	,
841.28	,
1119.99	,
1236.90	,
2160.27	,
958.76	,
1429.89	,
2117.81	,
2117.81	,
165.36	,
165.36	,
349.27	,
231.03	,
385.92	,
385.92	,
434.56	,
837.31	,
73.23	,
94.62	,
86.93	,
920.73	,
1187.09	,
932.65	,
1235.56	,
1293.44	,
1528.63	,
1314.66	,
81.96	,
834.53	
];

let pesos = [];


for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i])* dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

