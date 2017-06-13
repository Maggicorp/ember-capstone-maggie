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
        console.log('count is before the add is', count)
        count.push(response.syllables.count);
        console.log('count is', count)
        count = count.filter(function(n){ return n !== undefined});
        console.log('count after remove is', count)
        console.log('sum is', count.reduce((a, b) => a + b, 0));
        let sum = count.reduce((a, b) => a + b, 0)
        $('.sword').append('<br> ' + response.word +
        ' : ' + response.syllables.count + '\n\t ')
        $('.scount').text('The number of syllables in this line is approximately ' + sum);
        this.get('flashMessages')
        .success('The number of syllabls in the word ' + word + ' is ' + response.syllables.count, {
        sticky: false,
        timeout: 5000,
});
      })
      .catch(()=> {
        console.log('catch')
        this.get('flashMessages')
        .danger('Error, syllables counter did not recognize one of you words')
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
