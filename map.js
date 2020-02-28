const items=[
    {name: "monitor", price:10},
    {name: "mouse  ", price:5},
    {name: "speaker", price:7},
    {name: "camera", price:11}
]
    // for(let i=0; i<items.length;i++)
    // {
    //     console.log[i];
    // }
    //THIS IS THE OLD WAY THAT WAS USED IN ES5

    const mapArray=items.map((item,index)=>
        {
            return item.name
        })
        console.log(mapArray); //AN INDEX SHOULD BE PROVIDED. USUALLY THERE IS AN ID GIVEN FROM THE BACKEND IF YOU DNT GET ANY USE INDEX INSTEAD
//MAP RETURNS THE WHOLE ARRAY

// const mapArray=items.map(({name,price})=>
//     {
//         return price
//     })
//     console.log(mapArray);

    //UPPER CODE DESTRUCTURED