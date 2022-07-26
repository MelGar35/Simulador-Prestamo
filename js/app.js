let intereses = 0 

let prestamo = Number(prompt ("Bienvenid@ al simulador de prestamos a pagar en 5 años! Por favor ingrese la suma de su prestamo"))

let cuotasFijas = 0

while (prestamo !=0) {
const simuladorPrestamo = () => {
    if (prestamo >= 850000) {
        cuotasFijas = (prestamo/60) * 1.01
        intereses = (prestamo/60) * 0.01
    } else{
        cuotasFijas= (prestamo/60)*1.05
        intereses= (prestamo/60)*0.05
    }
    alert ("El prestamo fue de: $" + prestamo + ".-")
    alert ("Las cuotas fijas mensuales a pagar en 5 años serán de: $" + cuotasFijas + ".-")
    alert ("El pago total de los intereses será de: $" + intereses * 60 + ".-")
    alert ("Gracias por participar del simulador")
}
    simuladorPrestamo ()
    prestamo = Number(prompt("Por favor ingrese la suma de su prestamo o esc para salir"))
}









