const { useState } = React;

function App() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [imc, setImc] = useState(0)
  const [detalles, setDetalles] = useState("")

  const calcularImc = (e) => {
    const resultado = (parseFloat(peso) / parseFloat(altura ** 2)).toFixed(2) 
    setImc(resultado)

    const msj = document.getElementById("msj")
    if (resultado < 18.5) {
      setDetalles("Nivel bajo")
      msj.style.color = "gold"
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      setDetalles("Nivel normal")
      msj.style.color = "green"
    } else if (resultado >= 25 && resultado <= 29.9) {
      setDetalles("Nivel de sobrepeso")
      msj.style.color = "orange"
    } else {
      setDetalles("Nivel de obesidad")
      msj.style.color = "red"
    }
    e.preventDefault()
  }

  return (
    <>
    <form onSubmit={calcularImc}> 
      <label htmlFor="peso">Peso: </label>
      <input id="peso" value={peso} onChange={(e) => setPeso(e.target.value)}></input>
        <br/>
      <label htmlFor="altura">Altura (m): </label>
      <input id="altura" value={altura} onChange={(e) => setAltura(e.target.value)}></input>
        <br/>
      <button type="submit">Calcular IMC</button>
    </form>
      <p>IMC: {imc}</p>
      <p id="msj">{detalles}</p>
    </>
  )
}
