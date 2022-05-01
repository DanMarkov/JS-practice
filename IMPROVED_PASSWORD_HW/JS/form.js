/* form.js */

export function isPasswordValid(password) {
    console.log(password);

    let result = password.trim()

    if (result.length >= 10) {
        return true
    }
    
    return false
}