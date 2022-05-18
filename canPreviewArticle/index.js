/**
 * @param {string} type
 * @param {boolean} isAuthor
 */
 function canPreviewArticle(type, isAuthor) {
	if (type === "admin"|| isAuthor) {
        return true
    } else {
        return false
    }
}

// Sample usage - do not modify
console.log(canPreviewArticle("admin", false)) // true
console.log(canPreviewArticle("admin", true)) // true
console.log(canPreviewArticle("user", true)) // true
console.log(canPreviewArticle("user", false)) // false