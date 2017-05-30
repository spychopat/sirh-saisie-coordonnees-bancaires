import template from './banque.component.html'
import css from './banque.component.css'



class controller {

    $onChanges () {
        this.toppings = angular.copy(this.toppings);
    }
}

export let BanqueComponent = {
    template,
    controller,
    bindings: {
        toppings: '<'
    }
}
