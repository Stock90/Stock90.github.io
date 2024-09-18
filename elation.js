const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4150;
let precio = [33.22	,
13.29	,
22.89   ,
33.22	,
55.37	,
441.75  ,
404.84	,
626.33	,
810.90	,
1569.43	,
28.42	,
184.58	,
768.70	,
1601.46	,
2590.81	,
761.05	,
129.60	,
129.64	,
1197.89	,
25.84	,
270.38	,
457.75	,
609.10	,
1018.50	 
];
let pesos = [];

for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i]/0.82) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

