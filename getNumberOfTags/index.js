/**
 * @param {Object} game
 * @param {string} game.name
 * @param {string[]} game.tags
 * @param {number} game.releaseYear
 */
 function getNumberOfTags(game) {
	return game.tags.forEach(function(tag){
        console.log(tag);
        return tag;
    });

}

// Sample usage - do not modify
let game = {
  name: "Risk",
  tags: ["Strategy", "War", "Family friendly"],
  releaseYear: 1957
};

getNumberOfTags(game);