let calculate = document.getElementById("calculate")
calculate.addEventListener("click", ()=>{
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    quadraticEquation(a, b, c)
})

function quadraticEquation(a, b, c){
    let results = document.getElementById("res")
    try{
        let sol1 = (-b + Math.sqrt(b**2 - 4*a*c))/(2*a)
        let sol2 = (-b - Math.sqrt(b**2 - 4*a*c))/(2*a)
        if(sol1==sol2){
            results.textContent =  `There is one solution: ${sol1}`
        }else{
            results.textContent =  `There are two solutions: ${sol1} and ${sol2}`
        }
    }catch{
        results.textContent =  "No solutions."
    }
}




    

