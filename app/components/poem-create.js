import Ember from 'ember';

export default Ember.Component.extend({
  newPoem: {
    title: null,
    firstline: null,
    secondline: null,
    thirdline: null
  },

  onInit: function(){
    $('.syllables').css('display', 'none');
    this.set('newPoem.title', null);
    this.set('newPoem.firstline', null);
    this.set('newPoem.secondline', null);
    this.set('newPoem.thirdline', null);
  }.on("init"),

  actions: {

    dataLine1() {
      let newPoem = this.get('newPoem');
      let word = newPoem.firstline;
      if (word === null || word === undefined || word === '') {
        this.get('flashMessages')
        .danger('Error, input a word to get the syllables count');
        $('.syllables').css('display', 'none');
        return
      }
      $('.sword').text('');
      $('.scount').text('');
      $('.syllables').css('display', 'block');
      this.sendAction('callapi', 'restart here');
      let wordArray = word.split(' ');
      let length = wordArray.length;
      for (let i=0; i < length; i++) {
        let thisWord = wordArray[i];
        thisWord = thisWord.replace(/\W$/, "");
        thisWord = thisWord.replace(/\d$/, "");
      this.sendAction('callapi', thisWord);
      }
    },

    dataLine2() {
      let newPoem = this.get('newPoem');
      let word = newPoem.secondline;
      $('.sword').text('');
      $('.scount').text('');
      if (word === null || word === undefined || word === '') {
        this.get('flashMessages')
        .danger('Error, input a word to get the syllables count');
        $('.syllables').css('display', 'none');
        return
      }
      this.sendAction('callapi', 'restart here');
      let wordArray = word.split(' ');
      let length = wordArray.length;
      for (let i=0; i < length; i++) {
        let thisWord = wordArray[i];
        thisWord = thisWord.replace(/\W$/, "");
        thisWord = thisWord.replace(/\d$/, "");
      this.sendAction('callapi', thisWord);
      }
    },

    dataLine3() {
      let newPoem = this.get('newPoem');
      let word = newPoem.thirdline;
      $('.sword').text('');
      $('.scount').text('');
      if (word === null || word === undefined || word === '') {
        this.get('flashMessages')
        .danger('Error, input a word to get the syllables count');
        $('.syllables').css('display', 'none');
        return
      }
      this.sendAction('callapi', 'restart here');
      let wordArray = word.split(' ');
      let length = wordArray.length;
      for (let i=0; i < length; i++) {
        let thisWord = wordArray[i];
        thisWord = thisWord.replace(/\W$/, "");
        thisWord = thisWord.replace(/\d$/, "");
        this.sendAction('callapi', thisWord);
      }
    },

    submit() {
      let data =
      this.get('newPoem');
      if(data.firstline === null || data.secondline === null || data.thirdline === null) {
        this.get('flashMessages')
        .danger('Error, please include a valid input for all three lines');
        return;
      }
      this.sendAction('poemCreate', data);
      this.set('newPoem.title', null);
      this.set('newPoem.firstline', null);
      this.set('newPoem.secondline', null);
      this.set('newPoem.thirdline', null);
    },

    getTheme() {
      const themes = ['summer time', 'trees in the rain', 'birds singing', 'sunshine and icecream', 'lakes with kayaks', 'ponds full of fish', 'freshly fallen snow', 'a stone castle', 'winter in the country', 'fall in New England', 'picking apples in autumn', 'rain falling softly', 'cats taking a nap', 'deer eating flowers', 'cold weather and hot coffee', 'hot summer days', 'warm socks', 'howling at the moon', 'fun in the sun'];
      const themesLength = themes.length;
      const randNum = Math.floor(Math.random() * themesLength);
      const newTheme = themes[randNum];
      $('.theme').text(newTheme);
    },
  }
});
