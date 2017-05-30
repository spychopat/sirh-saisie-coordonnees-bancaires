const API_URL = 'http://localhost:8080/sgp/api/collaborateurs'

export class BurgerService {
  constructor ($http, $q) {
    this.$http = $http
    this.$q = $q

  }

  getBurgers () {
    return this.$http.get(API_URL)
    .then(response => response.data)
  }

  getBurger (id) {
    if(!id){
        return this.$q.resolve({
        name: '',
        toppings: [],
        creator: ''
      })
    }else{
        return this.$http.get(`${API_URL}/${id}`)
        .then(response => response.data)
    }
  }
  save (burger) {
    return burger.id
      ? this.update(burger)
      : this.create(burger)
  }

  update (burger) {
    return this.$http.put(`${API_URL}/${burger.id}`, burger)
    .then(response => response.data)
  }

  create (burger) {
    return this.$http.post(API_URL, burger)
    .then(response => response.data)
  }

  delete (burger) {
    return this.$http.delete(`${API_URL}/${burger.id}`, burger)
    .then(response => response.data)
  }
}
