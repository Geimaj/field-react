let data = require("./oldportfolioData.js")

const pathPrefix = "../assets/animation/portfolio"

let newData = []

data.forEach((item) => {
    // if(!item.animationData){
        item.title = item.title.toLowerCase();

        let filename = item.title.replace(" ", "")
        
        item.animationPath = `${pathPrefix}/${filename}.json`


        delete item.animationData
        
    // }
    newData.push(item)
})

console.log(newData)