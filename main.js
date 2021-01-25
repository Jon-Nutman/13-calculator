


let output = document.querySelector('#sub').addEventListener('submit', function (e) {
    e.preventDefault()
    // console.log(e.submitter.id)
    let answer = ''
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let operator = e.submitter.id

    // console.log(operator)

    if (operator == "add"){
        answer = Number(num1) + Number(num2)
    }else if(operator == "subtract"){
        answer = Number(num1) - Number(num2)
    }else if(operator == "times"){
        answer = (Number(num1)) * (Number(num2))
    }else if(operator == "divide"){
        answer = (Number(num1)) / (Number(num2))
    }
    return answer
    // console.log(answer)
})

console.log(output)

document.getElementById("answer").innerHTML = output



// document.querySelector('#sub').addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.log(e.submitter.id)
//     let num1 = document.getElementById("num1").value
//     let num2 = document.getElementById("num2").value
// })



// function calc()
// {
//    let D = ""
//     let A = document.getElementById("num1").value
//     let C = document.getElementById("num2").value
//     let B = document.querySelector('#sub').addEventListener('submit', function (e) {
//         e.preventDefault()
//     })


//     if(B == "+")
//     {
//         D = Number(A) + Number(C)
//     }
//     else if(B == "-")
//     {
//         D = Number(A) - Number(C)
//     }
//     else if(B == "*")
//     {
//         D = Number(A) * Number(C)
//     }
//     else if(B == "/")
//     {
//         D = Number(A) / Number(C)
//     }
//     document.getElementById("#sub").innerHTML = D
// }

