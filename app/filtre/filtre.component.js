import template from './filtre.component.html'

class controller {

    constructor ($interval) {
        this.$interval = $interval
    }

    $onChanges (changes) {
        if (changes.toppings && changes.toppings.currentValue) {

            // on retourne le tableau (cloné) avant de l'afficher
            this.toppings = angular.copy(this.toppings).reverse()


            this.time = { value: 10 }
        }
    }

    end () {
        this.onTimeout()
    }

    start (remain) {
        this.updateScore({$event: remain})
    }


}

export let FiltreComponent = {
    controller,
    template,
    bindings: {
        toppings: '<',
        onTimeout: '&',
        updateScore: '&'
    }
}
