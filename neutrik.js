const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
let dolar = 4300;
let precio = [48.37,64.71,87.81,12.37,10.86,13.06,15.74,12.09,7.32,23.36,28.70,12.94,8.64,8.48,7.69,7.69,7.69,3.63,14.27,13.87,4.78,4.78,3.88,3.80,16.04,37.75,,6.40,10.35,3.08,3.08,1.49,3.45,17.90,4.35,10.01,3.45,4.86,1.28,3.29,3.85,3.34,5.69,9.09,3.09,4.37,17.50,4.51,12.57,11.95,7.80,7.52,6.66,12.52,5.89,2.35,1.95,3.08,11.49,5.52,18.52,30.13,20.24,15.81,4.72,4.83,5.17,5.17,6.41,3.95,5.48,5.48,6.34,3.31,2.88,25.13,10.01,,8.41 ,17.78,29.81,1.28,,116.76,105.89,102.53,13.72,26.52,3.78,13.23,220.58,4.11,275.45,47.60,14.54,1.75,26.64];

let pesos = [];


for (let i = 0; i < precio.length; i++) {
    pesos[i] = formatter.format(Math.ceil(((precio[i] / 0.7) * dolar * 1.19) / 100) * 100);
    document.getElementById("precio" + i).innerHTML = pesos[i];
}

