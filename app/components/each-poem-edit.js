import Ember from 'ember';

export default Ember.Component.extend({
  pastPoem: {
    title: null,
    firstline: null,
    secondline: null,
    thirdline: null
  },
  actions: {
    edit() {
      console.log('at update poem in each poem edit component, poem is', this.get('poem'))
      let data = this.get('poem')
      console.log('different line is', this.get('poem').get('firstline'))
      let firstline = this.get('poem').get('firstline')
      let secondline = this.get('poem').get('secondline')
      let thirdline = this.get('poem').get('thirdline')
      console.log('they are', firstline, secondline, thirdline)
      if (firstline === '' || secondline === '' || thirdline === '') {
        console.log('at error')
        this.get('flashMessages')
          .danger('Error, please include a valid input for all three lines')
        return
      }
      this.sendAction('editPoem', this.get('poem'))
    }
  }
});