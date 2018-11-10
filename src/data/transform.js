let data = require("./portfolioData.js.old")

const pathPrefix = "../assets/animation/portfolio"

let newData = []

data.forEach((item) => {
    if(!item.animationData){
        item.title = item.title.toLowerCase();

        let filename = item.title.replace(" ", "")
        
        item.animationData = require(`${pathPrefix}/${filename}.json`)
        
    }
    newData.push(item)
})

console.log(newData)