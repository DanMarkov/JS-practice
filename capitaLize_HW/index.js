function capitaLize(string) {
 return string.charAt(0).toUpperCase() + string.slice(1);
}
 
console.log(capitaLize("hello")); // Hello
console.log(capitaLize("qwerty")); // Qwerty