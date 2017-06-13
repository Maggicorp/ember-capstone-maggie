import Ember from 'ember';

export default Ember.Route.extend({
  ajax2: Ember.inject.service(),
  totalSyl: Ember.computed( function() {
    let count = 0
    return count
  }),
  actions: {
    callapi (word) {
      console.log('did word make it', word)
      let url = 'https://wordsapiv1.p.mashape.com/words/' + word + '/syllables'
      console.log('call api in create.js');
      console.log('computer is', this.get('totalSyl'))
      return this.get('ajax2').request(url, {
        method: 'GET',
        headers: {'X-Mashape-Key': 'KT2RseIfS9mshXfUPbWLcFk8QDorp1P2tRmjsnE9qkK1Wrs6es'}
      })
      .then((response) => {
        // this.get('store').pushPayload(response)
        // need to figure
        console.log(response)
        this.get('flashMessages')
        .success('The number of syllabuls in the word ' + word + ' is ' + response.syllables.count, {
        sticky: true,
});
      })
      .catch(()=> {
        console.log('catch')
        this.get('flashMessages')
        .danger('You must type one, and only one, word to get a syllables count')
      })
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
