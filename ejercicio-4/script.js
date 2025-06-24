const izquierdo = document.getElementById("izquierdo")
const derecho = document.getElementById("derecho")
derecho.disabled = true

izquierdo.addEventListener("click", () => {
    derecho.disabled = false
    izquierdo.disabled = true
})

derecho.addEventListener("click", () => {
    izquierdo.disabled = false
    derecho.disabled = true
})