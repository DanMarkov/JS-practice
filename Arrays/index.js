let characters = ["a", "b", "c"]

let result = characters.map(function(character){
    return character.toUpperCase()
}).includes("B")

console.log(result)