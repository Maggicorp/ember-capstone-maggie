import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editPoem(poem) {
      console.log('at poem edit with', poem)
      poem.save()
      .then(() => {
        this.get('flashMessages')
        .success('Your Haiku has been edited.');
      })
      .then(() => this.transitionTo('poem'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again to edit your Haiku.');
    });
  }
}
});
