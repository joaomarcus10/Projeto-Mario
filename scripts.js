const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarForm() {
    form.style.left = "40%"
    form.style.transform = "translateX (-40%)"
    mascara.style.visibility ="visible"
    } 

function esconderForm () {
    form.style.left = "-306px"
    form.style.transform = "translateX (0)"
    mascara.style.visibility ="hidden"

}