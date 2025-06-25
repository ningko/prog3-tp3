const ul = document.getElementById("lista-tareas")

async function getCompletadas() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        if (!response.ok) {
            const li = document.createElement("li")
            li.textContent = `Error ${response.status}`
            ul.appendChild(li)
            return
        }
        const data = await response.json()
        const completadas = data.filter(tarea => tarea.completed)

        completadas.forEach(tarea => {
            const li = document.createElement("li")
            li.textContent = `${tarea.title}`
            ul.appendChild(li)
        })
    } catch (error) {
        console.log(error)
    }
}

getCompletadas()