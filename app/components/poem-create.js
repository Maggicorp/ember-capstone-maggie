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
        $('.syllables').css('display', 'none')
        return
      }
      $('.sword').text('')
      $('.scount').text('')
      $('.syllables').css('display', 'block')
      this.sendAction('callapi', 'restart here')
      let wordArray = word.split(' ')
      let length = wordArray.length
      for (let i=0; i < length; i++) {
        let thisWord = wordArray[i]
        thisWord = thisWord.replace(/\W$/, "");
      this.sendAction('callapi', thisWord);
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
        $('.syllables').css('display', 'none')
        return
      }
      this.sendAction('callapi', 'restart here')
      let wordArray = word.split(' ')
      let length = wordArray.length
      for (let i=0; i < length; i++) {
        let thisWord = wordArray[i]
        thisWord = thisWord.replace(/\W$/, "");
      this.sendAction('callapi', thisWord);
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
        $('.syllables').css('display', 'none');
        return
      }
      this.sendAction('callapi', 'restart here')
      let wordArray = word.split(' ')
      let length = wordArray.length
      for (let i=0; i < length; i++) {
        let thisWord = wordArray[i]
        thisWord = thisWord.replace(/\W$/, "");
        this.sendAction('callapi', thisWord);
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
    },
    getTheme() {
      console.log('in theme')
      const themes = ['summer', 'trees', 'birds', 'sunshine', 'lakes', 'pond', 'snow', 'stone', 'winter', 'fall', 'autumn', 'rain', 'birds', 'deer', 'cold', 'hot', 'warm', 'moon', 'sun']
      const themesLength = themes.length
      const randNum = Math.floor(Math.random() * themesLength)
      const newTheme = themes[randNum]
      $('.theme').text(newTheme)
    }
  }
  })

  // need to get better user data
