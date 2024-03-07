export const screenWidth = window.innerWidth
export const screenHeight = window.innerHeight

export const priceFormat = (price:number) =>{
    var priceString = price.toString()
    var newPrice = '';
    var maxLength = priceString.length
    while(maxLength > 3){
        newPrice += '.' + priceString.substring(priceString.length -3, priceString.length)
        maxLength -= 3
        priceString = priceString.substring(0, maxLength)
    } 

    newPrice = priceString + newPrice + 'đ'
    return newPrice
}