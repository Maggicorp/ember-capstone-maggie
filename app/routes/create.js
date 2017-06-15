import Ember from 'ember';

export default Ember.Route.extend({
  ajax2: Ember.inject.service(),
  count: [],

  actions: {

    callapi (word) {
      if (word === 'restart here') {
        let count = this.get('count');
        let length = count.length;
        for (let i = 0; i < length; i++) {
          count.pop();
          }
        return;
      }
      let url = 'https://wordsapiv1.p.mashape.com/words/' + word + '/syllables';
      return this.get('ajax2').request(url, {
        method: 'GET',
        headers: {'X-Mashape-Key': 'KT2RseIfS9mshXfUPbWLcFk8QDorp1P2tRmjsnE9qkK1Wrs6es'}
      })
      .then((response) => {
        let count = this.get('count');
        if (response.syllables.count === undefined) {
          response.syllables.count = 1;
          }
        count.push(response.syllables.count);
        let sum = count.reduce((a, b) => a + b, 0);
        $('.sword').append(' ' + response.word +
        ' : ' + response.syllables.count + '<br>')
        $('.scount').text('Total line is: ' + sum);
        $('.syllables').css('display', 'block')

      })
      .catch(()=> {
        this.get('flashMessages')
        .danger('Error, syllables counter did not recognize one of your words');
        if ( this.get('count').length === 0) {
          $('.syllables').css('display', 'none');
          }
      });
    },

    poemCreate (data){
      let newPoem = this.get('store').createRecord('poem', data);
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
