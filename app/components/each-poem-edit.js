import Ember from 'ember';

export default Ember.Component.extend({
  pastPoem: {
    title: null,
    firstline: 'two',
    secondline: 'third',
    thirdline: 'four'
  },
  onInit: function(){
    console.log('on init in each poem');
    console.log(this.get('poem'))
    let firstline = this.get('poem').get('firstline')
    let secondline = this.get('poem').get('secondline')
    let thirdline = this.get('poem').get('thirdline')
    if (this.get('poem').get('title')) {
      let title = this.get('poem').get('title')
      this.set('pastPoem.title', title)
    } else {
      this.set('pastPoem.title', null)
    }
    console.log('they are', firstline, secondline, thirdline)
    this.set('pastPoem.firstline', firstline)
    this.set('pastPoem.secondline', secondline)
    this.set('pastPoem.thirdline', thirdline)
  }.on("init"),
  actions: {
    edit() {
      console.log('at update poem in each poem edit component, poem is', this.get('pastPoem'))
      let pastPoem = this.get('pastPoem')
      let firstline = pastPoem.firstline
      let secondline = pastPoem.secondline
      let thirdline = pastPoem.thirdline
      let title = pastPoem.title
      console.log('they are', firstline, secondline, thirdline, title)
      if (firstline === '' || secondline === '' || thirdline === '') {
        console.log('at error')
        this.get('flashMessages')
          .danger('Error, please include a valid input for all three lines')
        return
      }
      let poem = this.get('poem')
      this.set('poem.firstline', firstline)
      this.set('poem.secondline', secondline)
      this.set('poem.thirdline', thirdline)
      this.set('poem.title', title)
      this.sendAction('editPoem', this.get('poem'))
    },
    cancel(){
      console.log('at cancel');
      this.get('poem').rollbackAttributes();
      this.sendAction('cancel');
    }
}
});
