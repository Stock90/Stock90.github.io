const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4000;
let precio = [85.37,516.80,786.55,11.84,136.57,19.99,28.35,313.75,525.57,720.99,121.45,129.73,125.28,500.02,104.29,231.92,61.00
    ];

let pesos = [];


for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 0.82) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

