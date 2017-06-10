import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    console.log('get all poems', this.get('store').findAll('Poem'))
    return this.get('store').findAll('Poem');

},
  actions: {
    poemCreate (data){
      console.log('at poemCreate in poem.js')
      console.log(this.get('store'))
      let newPoem = this.get('store').createRecord('poem', data)
      console.log('new poem', newPoem)
      newPoem.save()
  }
  }
});
