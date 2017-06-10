import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    poemCreate (data){
      console.log('at poemCreate in poem.js')
      console.log(this.get('store'))
      let newPoem = this.store.createRecord('poem', data)
      console.log('new poem', newPoem)
      newPoem.save()
      // let poem = this.get('store').createRecord('poem', data)
      // console.log('poem created is', poem)
      // poem.save()
  }
  }
});
