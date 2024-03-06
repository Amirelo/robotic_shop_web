export const screenWidth = window.innerWidth
export const screenHeight = window.innerHeight

export const priceFormat = (price:number) =>{
    var priceString = price.toString()
    var newPrice = '';
    while(priceString.length > 3){
        newPrice += '.' + priceString.substring(priceString.length -3, 7)
        price /= 1000
        priceString = price.toString()
    } 

    newPrice = price + newPrice + 'đ'
    return newPrice
}