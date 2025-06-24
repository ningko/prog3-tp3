const formulario = document.getElementById("formulario")
const operacion = document.getElementById("operacion")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")
calcular.disabled = false

formulario.addEventListener("submit", (e) => {
    const a = Number(document.getElementById("a").value)
    const b = Number(document.getElementById("b").value)

    let calculo
    switch(operacion.value) {
        case "suma":
            calculo = a + b
            break
        case "resta":
            calculo = a - b
            break
        case "multiplicacion":
            calculo = a * b
            break
        case "division":
            calculo = a / b
            break
        default:
            calculo = "No se seleccionó una operación"
    }
    resultado.innerHTML = `<strong>Resultado:</strong> ${calculo}`
    e.preventDefault()
})

const divCero = () => {
    const b = Number(document.getElementById("b").value)
    if (operacion.value === "division" && b === 0) {
        calcular.disabled = true
    } else {
        calcular.disabled = false
    }
}

operacion.addEventListener("change", divCero)
b.addEventListener("input", divCero)