 const array=['batman',,'spiderman']
 const [first,second='antman',third] =array

console.log(first)
 console.log(second)
 console.log(third)

 let sentence=`${first} has no superhuman characteristics while ${third} was bitten by a spider and got some`
 console.log(sentence);

// const someArray=['Bla']
// const[a="trash"] = someArray
// console.log(a);
//IF THE VALUE IS ALREADY GIVEN IT WILL KEEP THAT VALUE BECAUSE IT IS CONSTANT

function sumAndMultiply(a,b)
{
    return[a+b,a*b]
}

const [sum, multiply] = sumAndMultiply(4,7)
console.log(sum);

const firstPerson=
{
    name: 'bla',
    address: {
        city:'gotham',
        province:'maharashtara' 
    }
}

const secPerson=
{
    name: 'bla2',
    address: {
        city:'gotham2',
        province:'maharashtara2' 
    }
}

const{name,address:{city,province}} = firstPerson;
console.log(city)

//NESTED DESTRUCTURING