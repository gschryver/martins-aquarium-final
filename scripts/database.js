// chapter 8 

/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

// Concept Checking Questions
// What is the data type of the database variable? Object (complex data type)
// What is the data type of the fish property? Composite/array (complex data type)
// What is the data type of the name property? A string
// What is the data type of the size property? A number
// What data types will the fish array contain? Strings, numbers


// martin's aquarium fish object 
let database = {
    fish: [
        {
            name: "guppy",
            food: "tropical flakes",
            size: 3,
            family: "Poeciliidae",
            location: "Barbados",
            image: 'https://i.ibb.co/cLXV1x9/fish.jpg',
            altText: 'picture of silver and red guppy'
        },
        {   name: "mandarinfish",
            food: "crustaceans",
            size: 3,
            family: "dragonet",
            location: "the Ryukyu Islands",
            image: 'https://i.ibb.co/sb6wgpC/fish3.png',
            altText: 'picture of blue and purple mandarinfish'
        },
        {
            name: "siamese fighting fish",
            food: "pellets or granules",
            size: 6,
            family: "beta",
            location: "Thailand",
            image: 'https://i.ibb.co/5LKqHD8/fish3.png',
            altText: 'picture of blue siamese fighting fish'
        },
        {
            name: "clownfish",
            food: "zooplankton",
            size: 4,
            family: "Pomacentridae",
            location: "the Pacific ocean",
            image: 'https://i.ibb.co/gdqmB28/fish4.jpg',
            altText: 'picture of orange and black-striped clownfish'
        },
        {
            name: "lipstick naso tang",
            food: "varied, though primarily derived from algae sources",
            size: 18,
            family: "Acanthuridae",
            location: "the Indian ocean",
            image: 'https://i.ibb.co/n11B9K1/fish5.jpg',
            altText: 'picture of blue and orange lipstick naso tang'
        }
    ]
}

// export code 
export let getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}