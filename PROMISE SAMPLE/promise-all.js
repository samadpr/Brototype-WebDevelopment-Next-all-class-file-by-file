const { resolve, reject } = require("promise")
const Promise=require("promise")

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Samad")
        },3000)
    })
}
function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("546213879984")
        },2000)
    })
}

// Promise.all([getName(),getMobile()]).then((result)=>{
//     console.log(result)
// })

async function getUser(){
    let name=await getName()
    console.log(name)
    let mobile=await getMobile()
    console.log(mobile)
}

getUser()
