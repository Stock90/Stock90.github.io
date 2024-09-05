const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4100;
let precio = [14.31,
    36.09,
    57.93,
    92.50,
    106.84,
    36.13,
    (202300/1.19/dolar),
    83.29,
    125.36,
    113.97,
    158.13,
    18.53,
    37.00,
    40.24,
    349.32,
    83.14,
    295.61,
    902.83,
    1051.72,
    (330650/1.19/dolar),
    (488750/1.19/dolar),
    (586500/1.19/dolar),
    79.40,
    (422450/1.19/dolar),
    165.91,
    240.36,
    84.18,
    53.28,
    (158100/1.19/dolar),
    84.18,
    53.28,
    32.80,
    104.47,
    101.32,
    217.98,
    174.24,
    81.92,
    142.68,
    157.03,
    153.69,
    200.02,
    115.08,
    95.92,
    84.18,
    277.33,
    230.58,
    111.99,
    76.05,
    86.74,
    166.95,
    265.30,
    1433.32,
    314.23,
    374.72,
    1072.46,
    447.66,
    177.22,
    (428400/1.19/dolar),
    212.80,
    (734400/1.19/dolar),
    (782000/1.19/dolar),
    (776050/1.19/dolar),
    227.04,
    376.50,
    98.92,
    162.98,
    213.89,
    302.59,
    221.55
    ];

let pesos = [];

for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 0.82) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
} 