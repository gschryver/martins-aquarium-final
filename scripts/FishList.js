// Import the function that returns a copy of the fish array
import {getFish} from './database.js'

export let FishList = () => {
    // Invoke the function that you imported from the database module
    let fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (let singleFish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div class="harvested-fish">
            <img src="${singleFish.image}" class="fish-images float-left" alt="${singleFish.altText}" />
            <span class="li-fish-name">${singleFish.name}</span> &nbsp; | &nbsp;</span><span class="li-fish-location">${singleFish.location}.</span>
            <p class="no-margin">This ${singleFish.name} was harvested in the waters of ${singleFish.location}. It is of the family "${singleFish.family}", and is on average ${singleFish.size} inches in length. I have found that the best diet for the ${singleFish.name} is ${singleFish.food}.</p></div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

