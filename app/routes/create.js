import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    poemCreate (data){
      console.log('at poemCreate in poem.js')
      console.log(this.get('store'))
      let newPoem = this.
      get('store').createRecord('poem', data)
      console.log('new poem', newPoem)
      newPoem.save()
      .then(() => {
        this.get('flashMessages')
        .success('You successfully wrote a Haiku! Your Haiku is saved in My Haiku.');
      })
      .then(() => this.transitionTo('poem'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again and write a new Haiku.');
      });
  }
}
});
