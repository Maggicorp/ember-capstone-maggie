import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const published =
      this.get('auth').getPublished()
      return published
  },
  auth: Ember.inject.service(),
})
