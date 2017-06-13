// import store from 'store.js'

import Ember from 'ember';

export default Ember.Route.extend({
  ajax2: Ember.inject.service(),
  count: [],
  actions: {
    callapi (word) {
      // let hat = 'hat'
      // store.hat = hat
      console.log('did word make it', word)
      let url = 'https://wordsapiv1.p.mashape.com/words/' + word + '/syllables'
      console.log('call api in create.js');
      return this.get('ajax2').request(url, {
        method: 'GET',
        headers: {'X-Mashape-Key': 'KT2RseIfS9mshXfUPbWLcFk8QDorp1P2tRmjsnE9qkK1Wrs6es'}
      })
      .then((response) => {
        console.log(response)
        let count = this.get('count')
        console.log('count is', count)
        count.push(response.syllables.count);
        console.log('count is', count)
        count.filter(n => true)
        console.log('sum is', count.reduce((a, b) => a + b, 0));
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
