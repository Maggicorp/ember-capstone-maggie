import Ember from 'ember';

export default Ember.Component.extend({
  newPoem: {
    title: null,
    firstline: null,
    secondline: null,
    thirdline: null
  },
  onInit: function(){
    $('.syllables').css('display', 'none')
    this.set('newPoem.title', null);
    this.set('newPoem.firstline', null);
    this.set('newPoem.secondline', null);
    this.set('newPoem.thirdline', null);
  }.on("init"),
  actions: {
    dataLine1() {
      let newPoem = this.get('newPoem');
      let word = newPoem.firstline
      if (word === null || word === undefined || word === '') {
        this.get('flashMessages')
        .danger('Error, input a word to get the syllables count')
        return
      }
      $('.sword').text('')
      $('.scount').text('')
      $('.syllables').css('display', 'block')
      this.sendAction('callapi', 'restart here')
      let wordArray = word.split(' ')
      let length = wordArray.length
      for (let i=0; i < length; i++) {
      this.sendAction('callapi', wordArray[i]);
      }
    },
    dataLine2() {
      let newPoem = this.get('newPoem')
      let word = newPoem.secondline
      $('.sword').text('')
      $('.scount').text('')
      if (word === null || word === undefined || word === '') {
        this.get('flashMessages')
        .danger('Error, input a word to get the syllables count')
        return
      }
      this.sendAction('callapi', 'restart here')
      let wordArray = word.split(' ')
      let length = wordArray.length
      for (let i=0; i < length; i++) {
      this.sendAction('callapi', wordArray[i]);
      }
    },
    dataLine3() {
      let newPoem = this.get('newPoem')
      let word = newPoem.thirdline
      $('.sword').text('')
      $('.scount').text('')
      if (word === null || word === undefined || word === '') {
        this.get('flashMessages')
        .danger('Error, input a word to get the syllables count')
        return
      }
      this.sendAction('callapi', 'restart here')
      let wordArray = word.split(' ')
      let length = wordArray.length
      for (let i=0; i < length; i++) {
      this.sendAction('callapi', wordArray[i]);
      }
    },
    submit() {
      // console.log('after on submit')
      let data =
      this.get('newPoem')
      if(data.firstline === null || data.secondline === null || data.thirdline === null) {
        this.get('flashMessages')
        .danger('Error, please include a valid input for all three lines')
        return
      }
      // console.log('data is', data)
      this.sendAction('poemCreate', data);
      this.set('newPoem.title', null);
      this.set('newPoem.firstline', null);
      this.set('newPoem.secondline', null);
      this.set('newPoem.thirdline', null);
    }
  }
  })

  // need to get better user data
