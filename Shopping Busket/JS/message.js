/* message.js */
export function getMessage(value) {
    console.log(value)
    
    if (value < 0) {
        return 'invalid number'
    }
    
    if (value === 0) {
        return 'You dont have any items in your shopping list'
    }

    if (value === 1) {
        return 'You have one item in your shopping list'
    }

    if (value > 1) {
        return 'You have more than 1 item in your shopping list'
    }
  }