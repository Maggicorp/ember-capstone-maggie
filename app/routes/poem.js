import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    const poems = this.store.findAll('Poem', {backgroundReload: true});
    return poems;
},
  actions: {

    poemCreate (data){
      let newPoem = this.get('store').createRecord('poem', data);
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
    data.destroyRecord()
    .then(() => {
      this.get('flashMessages')
      .success('Your Haiku has been deleted.');
    })
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem, your Haiku was not deleted');
    });
  },

  publish(poem, status) {
    poem.save()
    .then(() => {
      this.get('flashMessages')
      .success('Your Haiku has been ' + status);
    })
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. No changes have been made.');
    });
  }
  }
});
