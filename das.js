const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4000;
let precio = [69.40,85.09,98.19,174.00,123.36,359.86,599.76,689.35,1008.49,1072.47,1604.18,1336.61,1242.13,1661.83,2427.19,2447.24,2617.74,1538.72,1699.34,2909.63,2109.30,2909.63,2967.95,1221.71,1859.26,227.19,227.19,317.41,317.41,530.22,1150.38,105.65,136.49,125.42,1896.48,118.24,1203.87];

let pesos = [];


for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil((precio[i] * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

