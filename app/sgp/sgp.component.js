//import './game.component.css'
import template from './sgp.component.html'

class controller {
    constructor (ToppingService, $location) {
        this.$location=$location
        this.ToppingService = ToppingService
        this.score=false
        this.remain
    }

    $onInit () {
        this.restart()
        this.ToppingService.getToppings()
        .then(toppings => this.toppings = toppings)

        this.ToppingService.getRandomRecipe()
        .then(recipe => this.recipe = recipe)
    }

    selectTopping (topping) {
        this.burger = [...this.burger, topping.name]
        const check = this.ToppingService.checkRecipe(this.burger, this.recipe)
        if (check === 'VALID') {
            console.log('You Win')
            this.ToppingService.getRandomRecipe()
            .then(recipe => this.recipe = recipe)
        }
        if (check === 'INVALID') {
            this.gameOver ();
        }
    }


    restart () {
        this.burger = []
        this.recipe = []
        this.running = true
        this.score = false
        this.ToppingService.getRandomRecipe()
        .then(recipe => this.recipe = recipe)
    }

    win ($event) {
        if($event){
            this.running = false
            this.score = true
            this.remain=$event
            console.log($event,this.score)
        }
    }

    gameOver () {
        this.$location.path('/')
        this.score = false
        this.running=false
    }

    startGame () {
        console.log("startGame")
    }
}

export let SgpComponent = {
    template,
    controller,
    bindings: {

    }
}
