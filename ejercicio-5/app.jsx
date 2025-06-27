const { useState, useEffect } = React

function App() {
  const [a ,setA] = useState(0)
  const [b, setB] = useState(0)
  const [operacion, setOperacion] = useState("")
  const [resultado, setResultado] = useState(null)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (operacion === "division" && Number(b) === 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [operacion, b])

  const handleSubmit = (e) => {
    e.preventDefault()
    const numA = Number(a)
    const numB = Number(b)
    let calculo
    switch(operacion) {
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
    setResultado(calculo)
  }

  return (
    <>
    <label for="operacion">Operación: </label>
    <select id="operacion" value={operacion} onChange={(e) => setOperacion(e.target.value)}>
        <option value="default">Seleccionar...</option>
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
    </select>

    <form onSubmit={handleSubmit}>
      <label htmlFor="a">Número A: </label>
      <input id="a" value={a} onChange={(e) => setA(Number(e.target.value))}></input>
      <br/>
      <label htmlFor="b">Número B: </label>
      <input id="b" value={b} onChange={(e) => setB(Number(e.target.value))}></input>
      <br/>
    <button type="submit" disabled={disabled}>Calcular</button>
    </form>
    {resultado !== null && (
    <p><strong>Resultado: </strong>{resultado}</p>
    )}</>
  )
}
