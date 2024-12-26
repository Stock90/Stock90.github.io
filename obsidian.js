const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4350;
let precio = [336.50,
336.50,
380.69,
419.21,
373.89,
883.74,
9874.10,
361.43,
1574.87,
2375.33,
508.72

];

let pesos = [];


for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 0.82) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

