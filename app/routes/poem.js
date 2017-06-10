import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    console.log('get all poems', this.get('store').findAll('poem'))
    return this.get('store').findAll('poem');
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
