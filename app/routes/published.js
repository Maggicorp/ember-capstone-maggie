import Ember from 'ember';

export default Ember.Route.extend({
  ajax2: Ember.inject.service(),
  actions: {
    getPublished() {
      console.log('at get published')
      let url = 'http://localhost:4741/published'
      return this.get('ajax2').request(url, {
        method: 'GET'
      })
      .then((response) => {
        console.log(response)
      })
      .catch(()=> {
        console.log('error')
      })
    }
  },
})
