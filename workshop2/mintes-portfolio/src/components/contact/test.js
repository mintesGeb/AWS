let myArray = [
  { x: 1, y: 2, z: 3 },
  { x: 3, y: 2, z: 6 },
];

const filterObj = {
    x:1,
    z:3
}

myArray.filter(item=>{
    let filtered=[]
    let myKeys=filterObj.keys() // [x,z]
    
    myKeys.forEach(key=>{
        
        if( item.key!==filterObj.key){
        }
        filtered.push(item)
    })
    return item
})
