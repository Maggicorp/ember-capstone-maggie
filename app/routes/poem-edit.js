import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition(transition) {
      console.log('at transition')
      console.log('transition ', transition.data)
      console.log('poem in transition ', this.get('store').get('poem'))
    },
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
  },
  cancel () {
    console.log('at cancel in poem-edit')
    history.back();
  }
}
});
