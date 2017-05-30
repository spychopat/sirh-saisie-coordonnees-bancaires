import './clients.component.css'
import template from './clients.component.html'

class controller {

    $onInit () {
        this.toppings = angular.copy(this.toppings)
    }

    select (topping) {
        this.onSelect({
            $event: topping
        })
    }

}

export let ClientsComponent = {
    template,
    controller,
    bindings: {
        toppings: '<',
        onSelect: '&'
    }
}
