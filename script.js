// task2
function Fibbanachi(num){
    if (num <= 1) return num
    else{
        return Fibbanachi(num-1)+Fibbanachi(num-2)
    }
}
// for (let i=0; i<=10;i++){
//     console.log(Fibbanachi(i))
// }

//task3
function filter(array,handler){
    const res = []
    array.forEach((element)=>{
        const el = handler(element)
        if(el) res.push(el)
    })
    return res
}

//task4
function pow(num,num1){
    return num**num1
}
console.log(pow(2,10))

//task5
function powList(array,num){
    return array.map((a)=>pow(a,num))
}

console.log(powList([1,2,3,4,5,6],4))

//task6
function powAndfilter(array,deg,min){
    return filter(powList(array,deg),((a)=> a<min ? a: undefined))
}

console.log(powAndfilter([1,2,3,4,5],2,10))

//task7

function sum(handler){
    return function culc(){
        return handler().reduce((a,b)=>a+b,0)
    }
}
const handler = ()=>[1,2,3]
const calc = sum(handler)
console.log(calc())