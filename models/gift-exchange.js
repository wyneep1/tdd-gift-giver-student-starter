const {BadRequestError} = require("../utils/errors")

class GiftExchange{
    static pairs(names){
        if(names.length % 2){
            throw new BadRequestError("Number of names cannot be odd");

        }
        const pairs = []
        while(names.length){
           let value1 = Math.floor(Math.random() * names.length)
           let names1 = names.splice(value1, 1)
           let value2 = Math.floor(Math.random() * names.length)
           let names2 = names.splice(value2, 1)
           pairs.push([names1[0], names2[0]])
        }
        return pairs
    }
    static traditional(names){
        let currentValue = names.length, randomValue;
        while(currentValue!=0){
            randomValue= Math.floor(Math.random() * currentValue);
            currentValue--;

            [names[currentValue], names[randomValue]]=[
                names[randomValue], names[currentValue]
            ];
        }
            const pairs = []
            for(let i=0; i<names.length; i++){
                const name1 = names[i]
                const name2 = i === names.length - 1 ? names[0] : names[i+1]
                pairs.push(`${name1} is giving a gift to ${name2}`)
            }
            return pairs

    }
}

module.exports = GiftExchange