const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4150;
let precio = [342.62,
    342.62	,
    342.62	,
    387.61	,
    380.69	,
    3218.54	,
    6775.09	,
    10053.62,
    368.00	,
    311.47	,
    1603.50	,
    598.72	,
    2418.52	,
    517.97	
];

let pesos = [];


for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 0.82) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

