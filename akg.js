const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4350;
let precio = [17.37	,
36.08	,
70.35	,
83.79	,
125.69	,
39.89	,
48.19	,
101.14	,
120.32	,
138.40	,
192.02	,
18.53	,
37.00	,
40.23	,
424.18	,
100.96	,
358.96	,
1096.28	,
1277.09	,
78.77	,
116.43	,
139.72	,
96.41	,
100.64	,
201.46	,
291.87	,
102.22	,
64.70	,
186.62	,
102.22	,
64.70	,
37.66	,
126.86	,
123.03	,
264.68	,
211.58	,
99.48	,
130.81	,
184.73	,
186.62	,
242.89	,
139.74	,
116.47	,
336.76	,
230.58	,
135.99	,
76.06	,
105.34	,
202.73	,
265.30	,
1686.26	,
381.55	,
455.02	,
1302.28	,
526.66	,
208.48	,
102.06	,		
250.36	,
174.95	,		
186.29	,
184.87	,
267.11	,
442.95	,	
116.37	,	
191.74	,
259.73	,
302.58	,
269.03	
	];

let pesos = [];

for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 1) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
} 
