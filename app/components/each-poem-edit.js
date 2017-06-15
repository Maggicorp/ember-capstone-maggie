import Ember from 'ember';

export default Ember.Component.extend({
  pastPoem: {
    title: null,
    firstline: 'two',
    secondline: 'third',
    thirdline: 'four'
  },

  onInit: function(){
    let firstline = this.get('poem').get('firstline');
    let secondline = this.get('poem').get('secondline');
    let thirdline = this.get('poem').get('thirdline');
    if (this.get('poem').get('title')) {
      let title = this.get('poem').get('title');
      this.set('pastPoem.title', title);
    } else {
      this.set('pastPoem.title', null);
    }
    this.set('pastPoem.firstline', firstline);
    this.set('pastPoem.secondline', secondline);
    this.set('pastPoem.thirdline', thirdline);
  }.on("init"),

  actions: {

    line1count() {
      let pastPoem = this.get('pastPoem');
      let word = pastPoem.firstline;
      let displayline = '.count1';
      if (word === null || word === undefined || word === '') {
          $(displayline).text('Nothing to Count');
        return
      }
      this.sendAction('callEditApi', 'restart here');
      let wordArray = word.split(' ');
      let length = wordArray.length;
      for (let i=0; i < length; i++) {
        let thisWord = wordArray[i];
        thisWord = thisWord.replace(/\W$/, "");
        thisWord = thisWord.replace(/\d$/, "");
      this.sendAction('callEditApi', thisWord, displayline);
      }
    },

    line2count() {
      let pastPoem = this.get('pastPoem');
      let displayline = '.count2';
      let word = pastPoem.secondline;
      if (word === null || word === undefined || word === '') {
          $(displayline).text('Nothing to Count');
        return
      }
      this.sendAction('callEditApi', 'restart here');
      let wordArray = word.split(' ');
      let length = wordArray.length;
      for (let i=0; i < length; i++) {
        let thisWord = wordArray[i];
        thisWord = thisWord.replace(/\W$/, "");
        thisWord = thisWord.replace(/\d$/, "");
        this.sendAction('callEditApi', thisWord, displayline);
      }
    },

    line3count() {
      let pastPoem = this.get('pastPoem');
      let displayline = '.count3';
      let word = pastPoem.thirdline;
      if (word === null || word === undefined || word === '') {
          $(displayline).text('Nothing to Count');
        return
      }
      this.sendAction('callEditApi', 'restart here');
      let wordArray = word.split(' ');
      let length = wordArray.length;
      for (let i=0; i < length; i++) {
        let thisWord = wordArray[i];
        thisWord = thisWord.replace(/\W$/, "");
        thisWord = thisWord.replace(/\d$/, "");
        this.sendAction('callEditApi', thisWord, displayline);
      }
    },

    edit() {
      let pastPoem = this.get('pastPoem');
      let firstline = pastPoem.firstline;
      let secondline = pastPoem.secondline;
      let thirdline = pastPoem.thirdline;
      let title = pastPoem.title;
      if (firstline === '' || secondline === '' || thirdline === '') {
        this.get('flashMessages')
          .danger('Error, please include a valid input for all three lines');
        return;
      }
      let poem = this.get('poem');
      this.set('poem.firstline', firstline);
      this.set('poem.secondline', secondline);
      this.set('poem.thirdline', thirdline);
      this.set('poem.title', title);
      this.sendAction('editPoem', this.get('poem'));
    },

    cancel(){
      this.get('poem').rollbackAttributes();
      this.sendAction('cancel');
    }
}
});
