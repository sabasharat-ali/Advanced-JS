const items=[
    {name: "monitor", price:10},
    {name: "mouse  ", price:5},
    {name: "speaker", price:7},
    {name: "camera", price:11}
]
const everyBool=items.every(item=>
    {
        return item.price >100
    })
    console.log(everyBool)