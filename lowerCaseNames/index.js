/**
 * @param {string[]} names
 */
 function lowerCaseNames(names) {
	return lowerCased = names.map(function(name){
        return name.toLowerCase()
    })
    // return lowerCased
}  

// Sample usage - do not modify
console.log(lowerCaseNames(["Addison", "Blake", "Sam", "August"])) // ["addison", "blake", "sam", "august"]
console.log(lowerCaseNames(["SAM", "AlEx", "CHARLIE"])) // ["sam", "alex", "charlie"]