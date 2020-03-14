const items=[
    {name: "monitor", price:10},
    {name: "mouse  ", price:5},
    {name: "speaker", price:7},
    {name: "camera", price:11}
]

const filterArray=items.filter(ashiyah =>{
    return ashiyah.price ===10 //CONDITION
})

console.log(filterArray)
//THIS RETURNS THE VALUES THAT HAVE PRICE LESS THAN 10