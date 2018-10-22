
const add = (a, b) => a + b
const minus = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b


const calcTemplate = () => {
    let temp = document.createElement('div')

    temp.className = 'calc'

    let inp = document.createElement('div')

    inp.className = 'input-display'
    inp.style.cssText = "padding:0.5em 1em;border:1px solid rgba(100,100,100,0.5);display:inline-block;"
    inp.textContent = "0"

    temp.appendChild(inp)

    for(i = 0; i <= 10; i++) {

        let n = document.createElement('button')
        if(i == 10) {
            n.value = "."
            n.textContent = "."
            n.setAttribute("id", "input-period")
        } else {
            n.value = i
            n.textContent = i
            n.setAttribute("id", "input-"+i)
        }   

        n.className = "c-input"

        temp.appendChild(n)

    }

    return temp
}

document.addEventListener("DOMContentLoaded", (event) => {    

    document.getElementById("c").appendChild( calcTemplate() )

    let inputBtn = document.querySelectorAll(".c-input")

    let inputDisplay = document.querySelector(".input-display")

    for(const inp of inputBtn) {
        
        inp.addEventListener(
            "click",
            (e) => { 
                let d = inputDisplay.textContent
                let i = e.toElement.value
                
                if(i === "." && d.indexOf(".") > 0) return

                if(d === "0" || d === null) {
                    inputDisplay.textContent = i
                } else {
                    inputDisplay.textContent += i                    
                }  
            }
        )

    }

})