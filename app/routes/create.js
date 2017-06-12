import Ember from 'ember';

export default Ember.Route.extend({
  ajax2: Ember.inject.service(),
  actions: {
    callapi () {
      let word = 'incredible'
      let url = 'https://wordsapiv1.p.mashape.com/words/' + word + '/syllables'
      console.log('call api in create.js')
      return this.get('ajax2').request(url, {
        method: 'GET',
        headers: {'X-Mashape-Key': 'KT2RseIfS9mshXfUPbWLcFk8QDorp1P2tRmjsnE9qkK1Wrs6es'}
      })
      .then((response) => {
        console.log(response)
      })
      .catch(()=> {console.log('catch')})
    },
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
