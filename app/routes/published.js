import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const published =
      this.get('auth').getPublished()
      console.log('published is', published)
      // .then((resonse) => {
      //   console.log('resposne is', response)
      // })
      return published
  },
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  actions: {
    getPublished() {
      this.get('auth').getPublished()
      .then((response) => {
          console.log(response)
        })
        .catch(()=> {
          console.log('error')
        })
    }
    // getPublished() {
    //   console.log('at get published')
    //   let url = 'http://localhost:4741/published'
    //   return this.get('ajax2').request(url, {
    //     method: 'GET'
    //   })
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch(()=> {
    //     console.log('error')
    //   })
    // }
  },
})
