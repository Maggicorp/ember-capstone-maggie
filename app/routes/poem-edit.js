import Ember from 'ember';

export default Ember.Route.extend({
  ajax2: Ember.inject.service(),
  count: [],
  actions: {
    // willTransition(transition) {
    //   console.log('at transition')
    //   console.log('transition ', transition.data)
    //   console.log('poem in transition ', this.get('store').get('poem'))
    // },
    callEditApi(word, displayline) {
      console.log('at call edit api', word)
      if (word === 'restart here') {
        let count = this.get('count')
      let length = count.length
      for (let i = 0; i < length; i++)
      {
          count.pop()
      }
      return
    }
      let url = 'https://wordsapiv1.p.mashape.com/words/' + word + '/syllables'
      return this.get('ajax2').request(url, {
        method: 'GET',
        headers: {'X-Mashape-Key': 'KT2RseIfS9mshXfUPbWLcFk8QDorp1P2tRmjsnE9qkK1Wrs6es'}
      })
      .then((response) => {
        let count = this.get('count')
        if (response.syllables.count === undefined)
        {
          response.syllables.count = 1
        }
        count.push(response.syllables.count);
        let sum = count.reduce((a, b) => a + b, 0)
        $(displayline).text('Syllables Count is ' + sum);
      })
      .catch(()=> {
        console.log('error')
        this.get('flashMessages')
        .danger('Error, syllables counter did not recognize one of your words')
        if ( this.get('count').length === 0) {
          $(displayline).text('Error, number of syllables cannot be counted')
        }
      })
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
