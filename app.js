let body = document.getElementById("body") 
let couples = [
    {
        boy: "Ram",
        girl:"Seetha"
    },
    {
        boy: "Krishna",
        girl:"Radha"
    },
    {
        boy: "Romeo",
        girl:"Juliet"
    },
    {
        boy: "Devadas",
        girl:"Paaru"
    },
    {
        boy: "Ram",
        girl:"Seetha"
    },
    {
        boy: "Ms Dhoni",
        girl:"Shakshi"
    },
    {
        boy: "Shiva",
        girl:"Parvathi"
    },{
        boy: "Arjun",
        girl:"Preethi"
    },{
        boy: "Virat",
        girl:"Anushka"
    }
]
// let randomCouple = Math.floor(Math.random()*couples.length)
// console.log(couples[randomCouple].boy)
// console.log(couples[randomCouple].girl)
// let boy = document.getElementById("men")
// boy.innerHTML = couples[randomCouple].boy
// let girl = document.getElementById("woomen")
// girl.innerHTML = couples[randomCouple].girl

function show(){
let randomCouple = Math.floor(Math.random()*couples.length)
// console.log(couples[randomCouple].boy)
// console.log(couples[randomCouple].girl)
let boy = document.getElementById("men")
boy.innerHTML = couples[randomCouple].boy
let Women = document.getElementById("women")
Women.innerHTML = couples[randomCouple].girl
}
