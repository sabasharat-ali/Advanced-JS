//TASK 1

{
const newArray = (a) => a.reverse();
console.log(newArray([1,2,3,4,5,6]));
}

//TASK 2

{
const check = (array, integer) => {
    array.map( item  =>{

    // console.log(item,item.length)
    if(item.length === integer){
        console.log(item)

    }
        })
        
    
}


check(["brazil", "germany", "india", "netherlands", "england"],5)
}

//TASK 3

{
const remove = ({array1=[5,5,7,8,2,9], integer1}={}) => {
    const filterArray=array1.filter(things => things !==integer1)
        return filterArray;
    }

console.log(remove({array1:[2,4,5,7,8,9],integer1:9}))
}

//TASK 4

{
    const athleteData = [
        { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
        { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
        { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
        { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
        { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
        { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
        { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
        { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
        { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
        { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
    ];
    athleteData.map(print => {
        console.log(`${print.athlete} in ${print.team} earned ${print.income} euros`)   
    })
}


//TASK 5

{
    const athleteData1 = [
    { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
    { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
    { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
    { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
    { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
    { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
    { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
    { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
    { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
    { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
];

    const result= athleteData1.filter(mahengay =>
    mahengay.income>100000)
    console.log(result);
}

//TASK 6

{
    const athleteData2 = [
        { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
        { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
        { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
        { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
        { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
        { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
        { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
        { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
        { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
        { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
    ];

    const popularPlayer= athleteData2.filter(legend =>
        legend.income>10000000)
        
        popularPlayer.map(legends => {
           console.log(`${legends.athlete} is a great player`)
        })

}
    
//TASK 7

{
  const bla = (a,b) => {
    const obj1={
       bla2 =() =>
      {
          a:undefined
          b:undefined
      }
    }
  }
}

//TASK 8(A)

{
    const myFunc = () => {
  const obj = {
    name: "umair",
    age: 22,
    profession: "Developer"
  };

  return obj;
};

    console.log(myFunc().age);
//THIS WILL EXECUTE BECAUSE ARROW FUNCTION BINDS IT AS A GLOBAL VARIABLE AND IS ACCESSIBLE OUTSIDE THE FUNCTION
}

//TASK 8(B)

{
    const arrayOfCourses = [
  {
    id: "CNC123",
    courseName: "Cloud Native Computing"
  },

  {
    id: "IOT123",
    courseName: "Internet of things"
  },
  {
    id: "AI123",
    courseName: "Artificial Intelligence"
  }
    ];

const passedCourses = ["CNC123","AI123"];
const [id1,id2]=passedCourses

// use the data structure given above and solve the following scenario

// if id's in the passedcourses array match with any id in the arrayofcourses array then show the output
// at each iteration as follow

// You haved passed {id} {courseName}

// const {id, courseName} = arrayOfCourses;
  const score=arrayOfCourses.filter(pointer => pointer.id === id1 || pointer.id === id2 )
  score.map(print => {
    console.log(`You have passed ${print.id} ${print.courseName}`)
  })


}

//TASK 9

// What is the output of the following code below

const arr = [
  { id: 1, name: "umair" },
  { id: 2, name: "asad" }
];

const index = 2;
const newObj = { id: 4, name: "shahbaz" };

arr[index] = { ...newObj };

console.log(arr);

//THIS WILL SIMPLY ADD THE newOBJ WE HAVE PROVIDED TO THE GIVEN OBJECT

// TASK 10

// use the array above as the main data structure and solve the following scenarios

/* 
1. Create a functionality that adds a new user to our data array 
with the default amount as 100 if no amount is explicitly provided

2. create a feature as such it allows us to remove a particular account 
from our data just by passing in the account name 

3. Create a feature that allows us to search a particular user from our 
given array just by giving in the name or amount 
*/
const data = [
  {
    name: "Umair",
    Amt: 100
  },
  {
    name: "Asad",
    Amt: 100
  }
];
const {naam,amt}=data
function add(name, amount=100)
{
  {
    data.name=name
    data.Amt=amount
  }
}
function deletetion(name1)
{
  const filtered= data.filter(deletion => deletion.name !== name1)
  console.log(filtered)
  
}
function search(name2)
{
  const searched = data.filter(talash => talash.name ===name2)
  console.log(searched)
}
add("Phoenix");
deletetion("Asad")
search('Asad')
// console.log(data)




//TASK 11

//IT WILL RETURN THE CURRENT DATE

//TASK 12

let ages = [25, 15,16,88,35,5]

let smallest=ages.reduce((acc,val) =>{
  if(val<acc)
  {
      acc=val
  }
  return acc
})

let greatest=ages.reduce((acc,val) =>{
  if(val>acc)
  {
      acc=val
  }
  return acc
})

let difference = greatest-smallest;
const output= [smallest, greatest,difference]
console.log(output)

//TASK 13

const color=["Red","Green","White", "Black"]
console.log(color.join(','))
console.log(color.join('+'))

//TASK 14

// {
//   const  randomNumbers =['3','a','a','a','2','3','a','3','a','2','4','9','3']

//   let unique = randomNumbers.reduce((acc,val) => {
//     if(acc===val)
//     {
      
//     }
//   })

// }


