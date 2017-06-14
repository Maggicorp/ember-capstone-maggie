import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // console.log('get all poems', this.get('store').findAll('Poem'));
    const poems = this.store.findAll('Poem', {backgroundReload: true});
    console.log('it the model the poesm are', poems)
    return poems;
},
  actions: {
    poemCreate (data){
      // console.log('at poemCreate in poem.js')
      // console.log(this.get('store'))
      let newPoem = this.get('store').createRecord('poem', data)
      // console.log('new poem', newPoem)
      newPoem.save()
      .then(() => {
        this.get('flashMessages')
        .success('You wrote a Haiku! Your Haiku is saved in your list of poems.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again and write a new Haiku.');
      });
  },
  deletePoem(data) {
    // console.log('at poem delete in poem.js')
    data.destroyRecord()
    .then(() => {
      this.get('flashMessages')
      .success('Your poem is gone.');
    })
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem, the poem persists');
    });
  },
  poemCount(){
    let poems = this.store.findAll('Poem')
    console.log('they are', this.get('model.length'))
    console.log('they are', this.get('poems.length'))


  }
}
});
