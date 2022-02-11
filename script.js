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
        let discriminant = Math.sqrt(b**2 - 4*a*c)
        if(discriminant>=0){
            let sol1 = ((-b + Math.sqrt(b**2 - 4*a*c))/(2*a)).toFixed(10)
            let sol2 = ((-b - Math.sqrt(b**2 - 4*a*c))/(2*a)).toFixed(10)
            if(sol1==sol2){
                results.textContent =  `There is one solution: ${sol1}`
            }else{
                results.textContent =  `There are two solutions: ${sol1} and ${sol2}`
            }
        }else{
            results.textContent =  "No solutions."
        } 
    }catch{
        results.textContent =  "No solutions."
    }
}




    

