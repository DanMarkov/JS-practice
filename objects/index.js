let recipes = [
    {
        title: "Pasta Pesto",
        preperationMinutes: 30,
        rating: 4.5
    },
    {
        title: "Lasagna",
        preperationMinutes: 45,
        rating: 3.9
    }
];

let titles = recipes.map(function(recipe){
    // console.log(recipe);
    return recipe.title
})

console.log(titles)