const items=[
    {name: "monitor", price:10},
    {name: "mouse  ", price:5},
    {name: "speaker", price:7},
    {name: "camera", price:11}
]

const foundItem=items.find(item=>{
    return(item.price<=10)
})
console.log(foundItem)