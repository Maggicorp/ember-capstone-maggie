import Ember from 'ember';

export default Ember.Component.extend({
  newPoem: {
    title: null,
    firstline: null,
    secondline: null,
    thirdline: null
  },
  actions: {
    callapi() {
      console.log('call api');
      if (this.get('word') === null || this.get('word') === undefined) {
        this.get('flashMessages')
        .danger('Error, input a word to get the syllables count')
        return
      }
      let word = this.get('word')
      let wordArray = word.split(' ')
      console.log(wordArray)
      let length = wordArray.length
      console.log(length)
      console.log(this.get('word'));
      for (let i=0; i < length; i++) {
      this.sendAction('callapi', wordArray[i]);
      }
      this.set('word', null);
    },
    submit() {
      console.log('after on submit')
      let data =
      this.get('newPoem')
      if(data.firstline === null || data.secondline === null || data.thirdline === null) {
        this.get('flashMessages')
        .danger('Error, please include a valid input for all three lines')
        return
      }
      console.log('data is', data)
      this.sendAction('poemCreate', data);
      this.set('newPoem.title', null);
      this.set('newPoem.firstline', null);
      this.set('newPoem.secondline', null);
      this.set('newPoem.thirdline', null);
    }
  }
  })

  // need to get better user data
