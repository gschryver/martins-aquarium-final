// chapter 9 - exporting 
// import code 
import {getFish} from './database.js'

let allFish = getFish()

for (let singleFish of allFish) {
    console.log(singleFish)
}

// Import the FishList function from the correct module
import {FishList} from './FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    (HTML container)

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
let parentHTMLElement = document.querySelector(".harvested-fish")


parentHTMLElement.innerHTML = FishList()