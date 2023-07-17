let array = [1,2,3,4,5,7,8]
let result = 0
for (let i = 0; i <array.length; i++){
    if(array[i] % 2 === 1){
        result += array[i]
    }
}

console.log(result)

let student = {id:1, name:"Alice"}
let newStudent = {id:2, ...student, name:"Bob"}
console.log(newStudent)