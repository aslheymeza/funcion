const txtOp1 = document.getElementById("operador1")
const txtOp2 = document.getElementById("operador2")
const txtOper = document.getElementById("operador")
const presultado = document.getElementById("resultado")
const btnLimpiar = document.getElementById("limpiar")

btnLimpiar.addEventListener("click",Limpiar)

function Calculo() {
    const oper = txtOper.value
    const fv1 = parseInt(txtOp1.value)
    const fv2 = parseInt(txtOp2.value)

    if (oper == "+" || oper == "-" || oper == "/" || oper == "*") {
        switch (oper) {
            case "+":
                presultado.innerText ="Su resultado es:" +(fv1 + fv2)
                break
            case "-":
                presultado.innerText = "Su resultado es:" +(fv1 - fv2)
                break
            case "/":
                presultado.innerText = "Su resultado es:" +(fv1 / fv2)
                break
            case "*":
                presultado.innerText = "Su resultado es:" +(fv1 * fv2)
                break

        }


    }
}

function Limpiar(){
document.getElementById("operador1").value=''
document.getElementById("operador2").value=''
document.getElementById("operador").value=''
document.getElementById("resultado").innerText=""

}