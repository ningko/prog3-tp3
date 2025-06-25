const formulario = document.getElementById("formulario")
const palabra = document.getElementById("palabra")
const ul = document.getElementById("ul-lista")
const filtrar = document.getElementById("filtrar") 
const animales = ["Cuervo", "Liebre", "Caracol", "Mapache", "Rana", "Ciervo", "Mariposa", "Jaguar", "Jirafa", "Lombriz", "Cisne", "Foca", "Oso", "Rinoceronte", "Tortuga", "Pulpo", "Panda", "Nutria", "Perro", "Gato", "Araña", "Ardilla"]

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    })

const filtrado = () => {
    const texto = palabra.value.toLowerCase()

    if (texto === "") return

    ul.innerHTML = ""

    const filtrados = animales.filter(animal => animal.toLowerCase().includes(texto))
    filtrados.forEach(animal => {
        const li = document.createElement("li")
        li.textContent = animal
        ul.appendChild(li)
    })
}

filtrar.addEventListener("click", filtrado)
