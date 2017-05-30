const API_URL = 'http://localhost:8080/sgp/api/collaborateurs'

export class ToppingService {
    constructor ($http, $q) {
        this.$http = $http
        this.$q = $q
        this.toppings = []
    }

    // return promise of toppings
    getToppings () {
        console.log('je suis la ')
        if (this.toppings.length !== 0) {
            return this.$q.resolve(this.toppings)
        }

        return this.$http.get(API_URL)
        .then(response => response.data)
        .then(toppings => {
            this.toppings = toppings
            return toppings
        })
    }

    getRandomRecipe () {
        return this.getToppings()
        .then(toStringToppings)
        .then(doubleToppings)
        .then(buildRandomRecipe(getRandomNbToppings(3, 6)))
    }

        checkRecipe (burger, recipe) {
        for (let i = 0; i < burger.length; i++) {
            if (burger[i] !== recipe[i]) return 'INVALID'
        }
        if (burger.length === recipe.length) return 'VALID'
        return 'RUNNING'
    }
}

// PRIVATE

// en entrée : [{ id: number, name: string }]
// en sortie : [name]
function toStringToppings (toppings) {
    return toppings.map(topping => topping.name)
}

// en entrée : [topping]
// en sortie : [topping, topping]
function doubleToppings (toppings) {
    return [...toppings, ...toppings]
}

// en entrée [topping, ...]
// en sortie recette ([topping1, topping2, ...])
function getRandomNbToppings(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

function buildRandomRecipe (nbToppings) {
    return function (doubleToppings) {
        let recipe = []

        for (let i = 0; i < nbToppings; i++) {
            let j = Math.floor(Math.random() * doubleToppings.length)
            let randomTopping = doubleToppings.splice(j, 1)
            recipe.push(randomTopping[0])
        }
        return recipe
    }
}
