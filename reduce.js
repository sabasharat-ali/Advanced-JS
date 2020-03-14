// let values=[5,4,1,10,7];
// let sum = values.reduce((acc,val) => acc + val,10)//HERE WE HAVE PROVIDED THE DEFAULT ACCUMULATOR AND FROM 10 THE SUM WILL START THEN THE FIRST INDEX
// console.log(sum)

let val1=[3,6,8,1]
let biggest=val1.reduce((acc,val) =>{
    if(val>acc)
    {
        acc=val
    }
    return acc
})
console.log(biggest)


