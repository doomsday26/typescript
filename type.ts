let num1= document.getElementById('num1') as HTMLInputElement
let number1= num1.value

let num2= document.getElementById('num2') as HTMLInputElement
let number2= num1.value

let btn =document.getElementById('btn') !
btn.addEventListener('click',()=>{
let a=add(number1,number2)
console.log(a);
})



function add(num1:number|string,num2:number|string){
    if(typeof num1==='number'&&typeof num2==='number'){
        return num1+ num2
    }
    if(typeof num1==='string'&&typeof num2==='string'){
        return(+num1 + +num2)
    }else{
        return "enter proper type"
    }
}


